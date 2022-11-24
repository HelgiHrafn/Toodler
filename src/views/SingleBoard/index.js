import React from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import TaskList from '../../components/TaskList'
import ListToolbar from '../../components/Toolbar/listToolbar'
import PropTypes from 'prop-types'

const Board = ({ navigation, route }) => {
  const board = route.params.board
  let lists = data.lists
  lists = lists.filter(function (element) { return element.boardId == board.id})
  return (
        <View style={styles.main}>
        <ListToolbar />
        <View style={[styles.boardBig, styles.coolShadow]}>

            <Text style={styles.h2}>{board.name}</Text>
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

export default Board
