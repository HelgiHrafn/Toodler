/* eslint-disable react/prop-types */
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './styles'
import BoardSmall from '../BoardSmall'

const BoardList = ({ boards, navigation }) => (
    <View style={styles.boardList}>
        <Text style={styles.h1}>Boards</Text>
        <FlatList
            numColumns={1}
            data={boards}
            renderItem={({ item }) => {
              return (
                    <BoardSmall
                        board={item} navigation={navigation}/>
              )
            }}
            keyExtractor={board => board.id}
        />
    </View>
)

export default BoardList
