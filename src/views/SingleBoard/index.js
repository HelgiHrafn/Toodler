import React from 'react'
import { View, Text, FlatList } from 'react-native'
import data from '../../resources/data.json'

const Board = ({[ board, lists]}) => {
    
        <View>
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
