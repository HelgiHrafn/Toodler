import React from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'
import styles from './styles'

const Board = ({board}) => {
        var lists = {
            "id": 1,
            "name": "Must see!",
            "color": "#ffffff",
            "boardId": 1
        },
        {
            "id": 2,
            "name": "One-day trips!",
            "color": "#00ff00",
            "boardId": 1
        }/* get lists */
        <View style={styles.boardBig}>
            <Text>{board.name}</Text>
            <FlatList
                numColumns={1}
                data={lists}
                renderItem={({item:{name, color}}) => {
                    return (
                        <TaskList name={name} color={color}/>
                    )

                }}
                keyExtractor={list => list.id}
            />
        </View>
    
}
export default Board
