import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import Task from '../../components/Task'
import TaskToolbar from '../../components/Toolbar/taskToolbar'
import { Picker } from '@react-native-picker/picker'
import AddTaskModal from '../../components/AddTaskModal'
import * as fileService from '../../services/fileService'
import EditTaskModal from '../../components/EditTaskModal'


const List = ({ navigation, route }) => {
  const list = route.params.list
  
  const lists = route.params.lists
  // const onTaskChangeListPress = route.params.onTaskChangeList
  const tasks = data.tasks
  
  const [allTasks, setAllTasks] = useState([...tasks])

  const showTasks = tasks.filter(function (element) { return element.listId == list.id })
  // All tasks within a list
  const [taskList, setTaskList] = useState([...showTasks])
  
  const [selectedDropdownMove, setSelectedDropdownMove] = useState(null)
  // All selected tasks from said list
  const [selectedTaskList, setSelelectedTaskList] = useState([])
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false)
  
  const [currentEditingTask, setCurrentEditingTask] = useState()

  const onTaskListLongPress = name => {
    if (selectedTaskList.indexOf(name) !== -1) {
      setSelelectedTaskList(selectedTaskList.filter(taskList => taskList !== name))
    } else {
      setSelelectedTaskList([...selectedTaskList, name])
    }
  }
  const addTask = async (inputs) => {
    const newTask = await fileService.addItem(inputs, allTasks)
    newTask.listId = list.id
    newTask.isFinished = false
    data.tasks.push(newTask)
    taskList.push(newTask)
    setAllTasks([...allTasks, newTask])
  }

  const editTask = (original, inputs) => {
    original.name = inputs.name
    original.description = inputs.description
    for (let i=1; i< tasks.length; i++) {
      if (tasks.id == original.id) {
          tasks.splice(i, 1)
          tasks.push(original)
      }
    }
  }

  const deleteSelectedTasks = () => {
    const temp = taskList
    for (let i = 0; i < selectedTaskList.length; i++) {
      for (let y = 0; y < temp.length; y++) {
        if (selectedTaskList[i] == temp[y].name) {
          temp[y].listId = ''
          taskList.splice(y, 1)
        }
        setTaskList([...temp])
        setSelelectedTaskList([])
      }
    }
  }

  const moveTask = () => {
    const temp = taskList
    for (let i = 0; i < selectedTaskList.length; i++) {
      for (let y = 0; y < temp.length; y++) {
        if (selectedTaskList[i] == temp[y].name) {
          temp[y].listId = Number(selectedDropdownMove)
          taskList.splice(y, 1)
        }
        setSelelectedTaskList([])
      }
    }
  }

  return (
        <View style={styles.main}>
        <TaskToolbar
          onAdd={() => setIsAddModalOpen(true)}
          onRemove={() => deleteSelectedTasks()}
          hasSelectedTasks={selectedTaskList.length > 0 } />
        <View style={[styles.listBig, styles.coolShadow]}>
            <Text style={styles.h2}>{route.params.list.name}</Text>
            {
              selectedTaskList.length > 0 && lists && lists.length > 0
                ? <View>
           <Picker
                selectedValue={selectedDropdownMove}
                onValueChange={value => {
                  setSelectedDropdownMove(value)
                }}>
                    <Picker.Item key={100022} label={'Select move'} value={null} />

                {
                  lists.map((listName, index) => {
                    if (list?.id === listName.id) return null
                    return <Picker.Item key={index} label={listName.name} value={listName.id} />
                  })
                }
            </Picker>
            <View>
              <TouchableOpacity style={styles.editButton}
                onPress={() => {
                  if (selectedDropdownMove > 0) {
                    moveTask()
                  }
                }}><Text style={styles.editText}>Move Task To List</Text>
                </TouchableOpacity>
            </View>
              </View>
                : null
            }
            <FlatList
                numColumns={1}
                data={taskList}
                renderItem={({ item }) => {
                  return (
                        <Task
                        task={item}
                        onTaskEdit={(task) => {setIsEditTaskModalOpen(true); setCurrentEditingTask(task)}}
                        onLongPress={name => onTaskListLongPress(name)}
                        isSelected={selectedTaskList.indexOf(item.name) !== -1}
                        navigation={navigation}/>
                  )
                }}
                keyExtractor={task => task.id}/>
        </View>
        <AddTaskModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        title={'Create new task!'}
        addTask={addTask}/>
        <EditTaskModal
        isOpen={isEditTaskModalOpen}
        original={currentEditingTask}
        closeModal={() => setIsEditTaskModalOpen(false)}
        title={'Edit task'}
        editFunction={editTask}/>
        </View>
  )
}

export default List
