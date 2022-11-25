import React, { useState } from 'react'
import { View, Text, FlatList, Pressable, Button } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import Task from '../../components/Task'
import TaskToolbar from '../../components/Toolbar/taskToolbar'
import { Picker } from '@react-native-picker/picker'

const List = ({ navigation, route }) => {
  const list = route.params.list
  const lists = route.params.lists
  //const onTaskChangeListPress = route.params.onTaskChangeList
  var tasks = data.tasks
  tasks = tasks.filter(function(element) {return element.listId == list.id})
  // All tasks within a list
  const [ taskList, setTaskList ] = useState([...tasks]);
  const [ selectedDropdownMove, setSelectedDropdownMove ] = useState(null);
  // All selected tasks from said list
  const [ selectedTaskList, setSelelectedTaskList] = useState([]);

  const onTaskListLongPress = name => {
    if (selectedTaskList.indexOf(name) !== -1) {
      setSelelectedTaskList(selectedTaskList.filter(taskList => taskList !== name ));
    } else {
      setSelelectedTaskList([...selectedTaskList, name]);
    }
  };

  const deleteSelectedTasks = () => {
    let temp = taskList
    for (let i = 0; i < selectedTaskList.length; i++) {
      for (let y = 0; y < temp.length; y++) {
        if (selectedTaskList[i] == temp[y].name) {
          taskList.splice(y, 1);
        }
    setTaskList([...taskList])
    setSelelectedTaskList([])   
      }
    }
  };

  const moveTask = () => {
    let temp = taskList;
    for (let i = 0; i < selectedTaskList.length; i++) {
      for (let y = 0; y < temp.length; y++) {
        if (selectedTaskList[i] == temp[y].name) {
          temp[y].listId = Number(selectedDropdownMove);
          taskList.splice(y, 1);
        }
      setTaskList([...temp])
      setSelelectedTaskList([])   
      }
    }
  };

  return (
        <View style={styles.main}>
        <TaskToolbar
          onRemove={() => deleteSelectedTasks()} 
          hasSelectedTasks={selectedTaskList.length > 0 } />
        <View style={[styles.listBig, styles.coolShadow]}>
            <Text style={styles.h2}>{route.params.list.name}</Text>
            {
              selectedTaskList.length > 0 && lists && lists.length > 0 ?
              <View>
           <Picker
                selectedValue={selectedDropdownMove}
                onValueChange={value => {
                  //console.log("value: ", value)
                  setSelectedDropdownMove(value)
                  }}>
                    <Picker.Item key={100022} label={'Select move'} value={null} />

                {
                  lists.map((listName, index) => {
                    if(list?.id === listName.id) return null
                    return <Picker.Item key={index} label={listName.name} value={listName.id} />
                  })
                }
            </Picker>
            <View style={{ width: 100, marginTop: 10, marginBottom: 15 }}>
              <Button
                title="Confirm" 
                onPress={() => {
                if(selectedDropdownMove > 0) {
                  moveTask();
                }
              }}>Move to different list</Button>
            </View>
              </View>
              :
              null
            }
            <FlatList
                numColumns={1}
                data={taskList}
                renderItem={({ item }) => {
                  return (
                        <Task 
                        task={item}
                        onLongPress={name => onTaskListLongPress(name)}
                        isSelected={selectedTaskList.indexOf(item.name) !== -1} 
                        navigation={navigation}/>
                  )
                }}
                keyExtractor={task => task.id}
            />
        </View>
        </View>
  )
}

export default List
