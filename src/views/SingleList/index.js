import React from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import Task from '../../components/Task'
import ListToolbar from '../../components/Toolbar/listToolbar'

const List = ({ navigation, route }) => {
  const list = route.params.list
  var tasks = data.tasks
  tasks = tasks.filter(function(element) {return element.listId == list.id})

  return (
        <View style={styles.main}>
        <ListToolbar />
        <View style={[styles.listBig, styles.coolShadow]}>
            <Text style={styles.h2}>{route.params.list.name}</Text>
            <FlatList
                numColumns={1}
                data={tasks}
                renderItem={({ item }) => {
                  return (

                        <Task task={item} navigation={navigation}/>
                  )
                }}
                keyExtractor={task => task.id}
            />
        </View>
        </View>
  )
}

export default List
