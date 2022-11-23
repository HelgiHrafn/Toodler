import React from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import TaskList from '../../components/TaskList'
import ListToolbar from '../../components/Toolbar/listToolbar'

const Board = ({ navigation, route }) => {
  const lists = getLists(route.params.board.id)
  return (
        <View style={styles.main}>
        <ListToolbar />
        <View style={[styles.boardBig, styles.coolShadow]}>

            <Text style={styles.h2}>{route.params.board.name}</Text>
            <FlatList
                numColumns={1}
                data={lists}
                renderItem={({ item }) => {
                  return (

                        <TaskList list={item} navigation={navigation}/>
                  )
                }}
                keyExtractor={list => list.id}
            />
        </View>
        </View>
  )
}

function getLists (boardid) {
  const lists = []
  for (const i in data.lists) {
    if (data.lists[i].boardId === boardid) {
      lists.push(data.lists[i])
    }
  }
  return lists
}

export default Board
