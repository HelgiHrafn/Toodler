import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

const Task = ({ task, navigation }) => {
  return (
    <TouchableHighlight style={styles.touchable}>
    <View style={styles.list}>
    <input type="checkbox" style={styles.dot} checked={task.isFinished}/>
      <View style={styles.textwrapper}>
          <Text style={styles.h3}>{task.name}</Text>
          <Text style={styles.h4}>{task.description}</Text>
      </View>
    </View>
    </TouchableHighlight>
  )
}

export default Task
