import React from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import Task from '../../components/Task'

const List = ({ navigation, route }) => {
  const tasks = data.tasks

  return (
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
  )
}
export default List
