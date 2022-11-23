import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const TaskList = ({ name, color }) => {
  return (
          <View style={styles.list}>
            <View style={[styles.dot, { backgroundColor: color }]}></View>
            <Text style={styles.h3}>{name}</Text>
      </View>
  )
}

export default TaskList
