/* eslint-disable react/prop-types */
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './styles'
import BoardSmall from '../BoardSmall'

const BoardList = ({ onEdit, boards, selectedBoardSmall, navigation, onLongPress }) => (
    <View style={[styles.boardBig, styles.coolShadow]}>
        <Text style={styles.h1}>Boards</Text>
        <FlatList
            numColumns={1}
            data={boards}
            renderItem={({ item }) => {
              return (
                    <BoardSmall
                        onEdit={onEdit}
                        onLongPress={onLongPress}
                        isSelected={selectedBoardSmall.indexOf(item.name) !== -1}
                        board={item}
                        navigation={navigation}/>
              )
            }}
            keyExtractor={board => board.id}
        />
    </View>
)

export default BoardList
