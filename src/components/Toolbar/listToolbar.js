import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import styles from './styles'

const ListToolbar = () => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Create list</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Delete</Text>
        </TouchableHighlight>

    </View>
)

export default ListToolbar
