import React from 'react'
import { View, Text } from 'react-native'
import Toolbar from '../../components/Toolbar'
import BoardList from '../../components/BoardList'
import data from '../../resources/data.json'
import styles from './styles'

const Boards = () => {
  return (
        <View>
            <Toolbar />
            <Text style={styles.h1}>Toodler</Text>

            <BoardList boards={data.boards} />
        </View>
  )
}

export default Boards
