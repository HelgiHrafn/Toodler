import React from 'react'
import { View, TouchableHighlight, Text, Image} from 'react-native'
import logo from '../../resources/logo.png'
import styles from './styles'

const TaskToolbar = () => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Create Task</Text>
        </TouchableHighlight>
        <Image style={styles.logo} source={logo} />
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Delete</Text>
        </TouchableHighlight>

    </View>
)

export default TaskToolbar