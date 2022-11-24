import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'

const TaskList = ({ list, navigation, onLongPress, isSelected }) => {
  return (
    <TouchableOpacity 
      onLongPress={() => onLongPress(list.name)}
      activeOpacity={0.6} 
      underlayColor="#FFF"onPress={() => navigation.navigate('List', { list })}>
      {
          isSelected
            ?
            <AntDesign name="checkcircleo"/>
            :
            <></>
      }
      <View style={styles.list}>
        <View style={[styles.dot, { backgroundColor: list.color }]}></View>
        <Text style={[ { opacity: isSelected ? .5 :1 }, styles.h3]}>{list.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default TaskList
