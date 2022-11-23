/* eslint-disable react/prop-types */
import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import  { AntDesign } from '@expo/vector-icons';
import styles from './styles'

const BoardSmall = ({ board, navigation, onLongPress, isSelected }) => {
  
  return (
        <TouchableOpacity
          style={styles.touchable} 
          onPress={() => navigation.navigate('Board', { board })}
          onLongPress={() => onLongPress(board.name)}>
          {
              isSelected
                ?
                <AntDesign name="checkcircleo"/>
                :
                <></>
          }
          <View style={[{ opacity: isSelected ? .5 : 1 }, styles.boardSmall, styles.coolShadow]}>  
              <Text style={styles.name}>{board.name}</Text>
              <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: board.thumbnailPhoto }}/>
          </View>
        </TouchableOpacity>
  );
}

export default BoardSmall;
