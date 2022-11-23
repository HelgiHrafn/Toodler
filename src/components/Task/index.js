import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

const Task = ({ task, navigation }) => {
  return (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#FFF">
      <View style={styles.list}>
        <View style={[styles.dot, { backgroundColor: task.color }]}></View>
        <Text style={styles.h3}>{task.name}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default Task
