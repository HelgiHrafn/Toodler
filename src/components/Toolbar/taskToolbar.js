import React from 'react'
import { View, TouchableHighlight, Text, Image} from 'react-native'
import logo from '../../resources/logo.png'
import styles from './styles'

const TaskToolbar = ({ hasSelectedTasks }) => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Create Task</Text>
        </TouchableHighlight>
        <Image style={styles.logo} source={logo} />
        <TouchableHighlight 
            style={styles.toolbarAction}
            disabled={!hasSelectedTasks}>
            <Text style={[styles.toolbarActionText, { color: !hasSelectedTasks ? 'gray' :{}}]}>Delete</Text>
        </TouchableHighlight>

    </View>
)

export default TaskToolbar
