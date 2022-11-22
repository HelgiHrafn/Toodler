import React from 'react'
import { View, Text } from 'react-native'
import BoardList from '../../components/BoardList'
import data from '../../resources/data.json'

const Boards = () => {
  console.log(data.boards)
  console.log(data.boards[0].id)
  return (
        <View>
            <Text>Boards</Text>

            <BoardList boards={data.boards} />
        </View>
  )
}

export default Boards
