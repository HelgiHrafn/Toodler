import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import styles from './styles'


const Toolbar = ({ hasSelectedBoards }) => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Create board</Text>
        </TouchableHighlight>
        <TouchableHighlight 
            style={styles.toolbarAction}
            disabled={!hasSelectedBoards}>
            <Text style={[styles.toolbarActionText, { color: !hasSelectedBoards ? 'gray'  : {}} ]}>Delete</Text>
        </TouchableHighlight>

    </View>
)

export default Toolbar
