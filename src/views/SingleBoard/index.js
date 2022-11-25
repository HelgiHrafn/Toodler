import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'
import TaskList from '../../components/TaskList'
import ListToolbar from '../../components/Toolbar/listToolbar'
import AddListModal from '../../components/AddListModal'
import * as fileService from '../../services/fileService'
import EditListModal from '../../components/EditListModal'


const Board = ({ navigation, route }) => {
  const board = route.params.board
  
  const lists = data.lists

  const [allLists, setAllLists] = useState([...lists])

  const showlists = lists.filter(function (element) { return element.boardId == board.id })
  // All lists within the board
  const [boardList, setBoardList] = useState([...showlists])
  // All selected lists from said board
  const [selectedBoardList, setSelectedBoardList] = useState([])

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  
  const [currentEditingList, setCurrentEditingList] = useState()

  const addList = async (inputs) => {
    const newList = await fileService.addItem(inputs, allLists)
    newList.boardId = board.id
    data.lists.push(newList)
    boardList.push(newList)
    setAllLists([...allLists, newList])
  }

  const editList = (original, inputs) => {
    original.name = inputs.name
    original.color = inputs.color
    for (let i = 0; i< boardList.length; i++) {
      if (boardList[i].id == original.id) {
        boardList[i] = original
      }
    }
  }

  const onBoardListLongPress = name => {
    if (selectedBoardList.indexOf(name) !== -1) {
      setSelectedBoardList(selectedBoardList.filter(boardList => boardList !== name))
    } else {
      setSelectedBoardList([...selectedBoardList, name])
    }
  }

  const deleteSelectedLists = () => {
    const temp = boardList
    for (let i = 0; i < selectedBoardList.length; i++) {
      for (let y = 0; y < temp.length; y++) {
        if (selectedBoardList[i] == temp[y].name) {
          temp[y].boardId = ''
          boardList.splice(y, 1)
        }
        setBoardList([...boardList])
        setSelectedBoardList([])
      }
    }
  }

  return (
        <View style={styles.main}>
        <ListToolbar onAdd={() => setIsAddModalOpen(true)}
          onRemove={() => deleteSelectedLists()}
          hasSelectedLists={selectedBoardList.length > 0 } />
        <View style={[styles.boardBig, styles.coolShadow]}>
            <Text style={styles.h2}>{board.name}</Text>
            <FlatList
                numColumns={1}
                data={boardList}
                renderItem={({ item }) => {
                  return (
                        <TaskList
                        onEdit={(list) => {setIsEditModalOpen(true); setCurrentEditingList(list)}}
                        list={item}
                        lists={boardList}
                        onLongPress={name => onBoardListLongPress(name)}
                        isSelected={selectedBoardList.indexOf(item.name) !== -1}
                        navigation={navigation}/>
                  )
                }}
                keyExtractor={list => list.id}/>
        </View>
        <AddListModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        title={'Create new list!'}
        addList={addList}/>
        <EditListModal
        editFunction={editList}
        isOpen={isEditModalOpen}
        original={currentEditingList}
        closeModal={() => setIsEditModalOpen(false)}
        title={'Edit board'}/>
        </View>
  )
}

export default Board
