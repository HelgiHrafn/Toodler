import React, { useState } from 'react'
import { View, Text, TouchableHighlight, Switch, CheckBox } from 'react-native'
import styles from './styles'

const Task = ({ task, navigation }) => {
  const [check, setCheck] = useState(task.isFinished);

  return (
    <TouchableHighlight style={styles.touchable}>
    <View style={styles.list}>
      {/* <input type="checkbox" style={styles.dot} checked={task.isFinished}/> */}
      {/* <Switch style={styles.checkbox} value={check} onValueChange={value => setCheck(value)} /> */}
      <CheckBox style={styles.checkbox} value={check} onValueChange={value => setCheck(value)} />
      <View style={styles.textwrapper}>
          <Text style={styles.h3}>{task.name}</Text>
          <Text style={styles.h4}>{task.description}</Text>
      </View>
    </View>
    </TouchableHighlight>
  )
}

export default Task
