import React, { useState } from 'react'
import { View } from 'react-native'
import Toolbar from '../../components/Toolbar'
import BoardList from '../../components/BoardList'
import data from '../../resources/data.json'
import styles from './styles'
import AddModal from '../../components/AddModal'
import * as fileService from '../../services/fileService'
import EditModal from '../../components/EditModal'

const Boards = ({ navigation }) => {
  // All boards within the application directory
  const [boardSmall, setBoardSmall] = useState(data.boards)
  // All selected boards
  const [selectedBoardSmall, setSelectedBoardSmall] = useState([])

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [currentEditingBoard, setCurrentEditingBoard] = useState()

  const onBoardSmallLongPress = name => {
    if (selectedBoardSmall.indexOf(name) !== -1) {
      // The smallboard is already within the list
      setSelectedBoardSmall(selectedBoardSmall.filter(boardSmall => boardSmall !== name))
    } else {
      // Add it to the list
      setSelectedBoardSmall([...selectedBoardSmall, name])
    }
  }

  const addBoard = async (inputs) => {
    const newBoard = await fileService.addItem(inputs, boardSmall)
    setBoardSmall([...boardSmall, newBoard])
  }
  const editBoard = (original, inputs) => {
    original.name = inputs.name
    original.description = inputs.description
    original.thumbnailPhoto = inputs.thumbnailPhoto
    for (let i=1; i< boardSmall.length; i++) {
      if (boardSmall.id == original.id) {
        boardSmall.splice(i, 1)
        setBoardSmall([...boardSmall, original])
      }
    }
  }

  const deleteSelectedBoards = () => {
    const temp = boardSmall
    for (let i = 0; i < selectedBoardSmall.length; i++) {
      for (let y = 0; y < temp.length; y++) {
        if (selectedBoardSmall[i] == temp[y].name) {
          boardSmall.splice(y, 1)
        }
        setBoardSmall([...boardSmall])
        setSelectedBoardSmall([])
      }
    }
  }
  return (

        <View style={styles.main}>

            <Toolbar
            onAdd={() => setIsAddModalOpen(true)}
            onRemove={() => deleteSelectedBoards()}
            hasSelectedBoards={selectedBoardSmall.length > 0} />
            <BoardList
              onEdit={(board) => {setIsEditModalOpen(true); setCurrentEditingBoard(board)}}
              onLongPress={name => onBoardSmallLongPress(name)}
              selectedBoardSmall={selectedBoardSmall}
              boards={boardSmall} navigation={navigation}/>
        <AddModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        title={'Create new board!'}
        addBoard={addBoard}
        />
        <EditModal
        editFunction={editBoard}
        isOpen={isEditModalOpen}
        original={currentEditingBoard}
        closeModal={() => setIsEditModalOpen(false)}
        title={'Edit board'}
        editFunction={editBoard}/>
        </View>
  )
}

export default Boards
