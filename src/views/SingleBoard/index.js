import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import TaskList from '../../components/TaskList'
import ListToolbar from '../../components/Toolbar/listToolbar'
import PropTypes from 'prop-types'

const Board = ({ navigation, route }) => {
  const board = route.params.board
  let lists = data.lists
  lists = lists.filter(function (element) { return element.boardId == board.id })
  // All lists within the board
  const [boardList, setBoardList] = useState(lists)
  // All selected lists from said board
  const [selectedBoardList, setSelectedBoardList] = useState([])

  const onBoardListLongPress = name => {
    if (selectedBoardList.indexOf(name) !== -1) {
      setSelectedBoardList(selectedBoardList.filter(boardList => boardList !== name))
    } else {
      setSelectedBoardList([...selectedBoardList, name])
    }
  }
  return (
        <View style={styles.main}>
        <ListToolbar hasSelectedLists={selectedBoardList.length > 0 } />
        <View style={[styles.boardBig, styles.coolShadow]}>

            <Text style={styles.h2}>{board.name}</Text>
            <FlatList
                numColumns={1}
                data={boardList}
                renderItem={({ item }) => {
                  return (
                        <TaskList
                        list={item}
                        onLongPress={name => onBoardListLongPress(name)}
                        isSelected={selectedBoardList.indexOf(item.name) !== -1}
                        navigation={navigation}/>
                  )
                }}
                keyExtractor={list => list.id}
            />
        </View>
        </View>
  )
}

export default Board
