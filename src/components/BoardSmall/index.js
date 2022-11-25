/* eslint-disable react/prop-types */
import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import  { AntDesign } from '@expo/vector-icons';
import styles from './styles'


const BoardSmall = ({ onEdit, board, navigation, onLongPress, isSelected }) => {
  return (
        <View>
        <TouchableOpacity style={styles.editButton} onPress={() => onEdit(board)}>
            <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
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
              <View style={styles.textWrapper}>
                <Text style={styles.name}>{board.name}</Text>
                <Text style={styles.description}>{board.description}</Text>
              </View>
              <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: board.thumbnailPhoto }}/>
          </View>
        </TouchableOpacity>
        </View>
  );
}

export default BoardSmall;
