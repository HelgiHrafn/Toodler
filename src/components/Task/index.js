import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import CheckBox from 'expo-checkbox';
import styles from './styles'

const Task = ({ task, navigation, onLongPress, isSelected }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(task.isFinished)

  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(task.name)} 
      style={styles.touchable}>
      {
          isSelected
            ?
            <AntDesign name="checkcircleo"/>
            :
            <></>
      }
    <View style={styles.list}>
      {/* <input type="checkbox" style={styles.dot} checked={task.isFinished}/> */}
      {/* <Switch style={styles.checkbox} value={check} onValueChange={value => setCheck(value)} /> */}
      <CheckBox style={styles.checkbox} value={toggleCheckBox} onValueChange={newValue => setToggleCheckBox(newValue)} />
      <View style={styles.textwrapper}>
          <Text 
            style={[{ opacity: isSelected ? .5 : 1}, styles.h3]}>{task.name}</Text>
          <Text style={[{ opacity: isSelected ? .5 : 1}, styles.h4]}>{task.description}</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default Task
