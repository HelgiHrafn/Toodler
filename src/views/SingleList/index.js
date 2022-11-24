import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import Task from '../../components/Task'
import TaskToolbar from '../../components/Toolbar/taskToolbar'

const List = ({ navigation, route }) => {
  const list = route.params.list
  var tasks = data.tasks
  tasks = tasks.filter(function(element) {return element.listId == list.id})
  // All tasks within a list
  const [ taskList, setTaskList ] = useState(tasks);
  // All selected tasks from said list
  const [ selectedTaskList, setSelelectedTaskList] = useState([]);

  const onTaskListLongPress = name => {
    if (selectedTaskList.indexOf(name) !== -1) {
      setSelelectedTaskList(selectedTaskList.filter(taskList => taskList !== name ))
    } else {
      setSelelectedTaskList([...selectedTaskList, name]);
    }
  };
  
  return (
        <View style={styles.main}>
        <TaskToolbar hasSelectedTasks={selectedTaskList.length > 0 } />
        <View style={[styles.listBig, styles.coolShadow]}>
            <Text style={styles.h2}>{route.params.list.name}</Text>
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
