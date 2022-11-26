import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CheckBox from 'expo-checkbox'
import styles from './styles'

const Task = ({ task, navigation, onLongPress, isSelected, onTaskEdit }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(task.isFinished)

  if (task.isFinished !== toggleCheckBox) {
    task.isFinished = !task.isFinished
  };

  return (
    <View>
    <TouchableOpacity
      onLongPress={() => onLongPress(task.name)}
      style={styles.touchable}>
      {
          isSelected
            ? <AntDesign name="checkcircleo"/>
            : <></>
      }
    <View style={styles.list}>
      <CheckBox style={styles.checkbox} value={toggleCheckBox} onValueChange={newValue => setToggleCheckBox(newValue)} />
      <View style={styles.textwrapper}>
          <Text
            style={[{ opacity: isSelected ? 0.5 : 1 }, styles.h3]}>{task.name}</Text>
          <Text style={[{ opacity: isSelected ? 0.5 : 1 }, styles.h4]}>{task.description}</Text>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editButton} onPress={() => onTaskEdit(task)}>
    <Text style={styles.editText}>Edit</Text>
    </TouchableOpacity>
 </View>
  )
}

export default Task
