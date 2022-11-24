import React from 'react'
import { View, TouchableHighlight, Text, Image } from 'react-native'
import logo from '../../resources/logo.png'
import styles from './styles'

const Toolbar = ({ hasSelectedBoards, onAdd, onRemove }) => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
            <Text style={styles.toolbarActionText}>Create board</Text>
        </TouchableHighlight>
        <Image style={styles.logo} source={logo} />
        <TouchableHighlight
            style={styles.toolbarAction}
            onPress={onRemove}
            disabled={!hasSelectedBoards}>
            <Text style={[styles.toolbarActionText, { color: !hasSelectedBoards ? 'gray' : 'black' }]}>Delete</Text>
        </TouchableHighlight>

    </View>
)

export default Toolbar
