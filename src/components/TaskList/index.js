import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'

const TaskList = ({ onEdit, list, navigation, onLongPress, isSelected, lists }) => {
  return (
    <View>
       
    <TouchableOpacity 
      onLongPress={() => onLongPress(list.name)}
      style={styles.touchable}
      onPress={() => navigation.navigate('List', { list, lists })}>
      {
          isSelected
            ?
            <AntDesign name="checkcircleo"/>
            :
            <></>
      }
      <View style={styles.list}>
        <View style={[styles.dot, { backgroundColor: list.color }]}></View>
        <Text style={[ { opacity: isSelected ? .5 : 1 }, styles.h3]}>{list.name}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editButton} onPress={() => onEdit(list)}>
            <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
    </View>
  );
}

export default TaskList
