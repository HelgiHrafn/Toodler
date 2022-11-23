import React from 'react'
import { View, Text } from 'react-native'
import Toolbar from '../../components/Toolbar'
import BoardList from '../../components/BoardList'
import data from '../../resources/data.json'
import styles from './styles'

const Boards = ({ navigation }) => {
  return (
        <View style={styles.main}>
            <Toolbar />
            <View style={[styles.boardBig, styles.coolShadow]}>

            <Text style={styles.h1}>Toodler</Text>
            {/* <Board board={data.boards[0]}></Board> */}
            <BoardList boards={data.boards} navigation={navigation}/>

            </View>
        </View>
  )
}

export default Boards
