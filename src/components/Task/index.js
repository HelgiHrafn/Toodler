import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

const Task = ({ task, navigation }) => {
  return (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#FFF">
      <View style={styles.list}>
        <View style={[styles.dot]}></View>
        <View style={styles.textwrapper}>
            <Text style={styles.h3}>{task.name}</Text>
            <Text style={styles.h4}>{task.description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default Task
