import React from 'react'
import { View, Text } from 'react-native'
import BoardList from '../../components/BoardList'
import data from '../../resources/data.json'
import styles from './styles'

const Boards = () => {
<<<<<<< HEAD
    return (
        <View>
            <Text style={styles.h1}>Toodler</Text>
            
=======
  console.log(data.boards)
  console.log(data.boards[0].id)
  return (
        <View>
            <Text>Boards</Text>

>>>>>>> main
            <BoardList boards={data.boards} />
        </View>
  )
}

export default Boards
