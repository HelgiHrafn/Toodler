/* eslint-disable react/prop-types */
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './styles'
import BoardSmall from '../BoardSmall'

const BoardList = ({ boards }) => (
    <View style={styles.boardList}>
        <Text style={styles.h1}>Boards</Text>
        <FlatList
            numColumns={1}
            data={boards}
            renderItem={({ item: { name, thumbnailPhoto } }) => {
              console.log(name)
              console.log(thumbnailPhoto)
              return (

                    <BoardSmall
                        name={name}
                        thumbnailPhoto={thumbnailPhoto} />

              )
            }}
            keyExtractor={board => board.id}
        />
    </View>
)

export default BoardList
