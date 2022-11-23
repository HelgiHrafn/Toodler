import React from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import TaskList from '../../components/TaskList'
import ListToolbar from '../../components/Toolbar/listToolbar'

const Board = ({ navigation, route }) => {
  const lists = data.lists

  return (
        <View style={[styles.boardBig, styles.coolShadow]}>
            <ListToolbar />
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
  )
}
export default Board
