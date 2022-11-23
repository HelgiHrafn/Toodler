import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

const TaskList = ({ list, navigation }) => {
  return (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#FFF"onPress={() => navigation.navigate('List', { list })}>
      <View style={styles.list}>
        <View style={[styles.dot, { backgroundColor: list.color }]}></View>
        <Text style={styles.h3}>{list.name}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default TaskList
