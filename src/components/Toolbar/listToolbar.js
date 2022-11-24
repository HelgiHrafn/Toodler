import React from 'react'
import { View, TouchableHighlight, Text, Image} from 'react-native'
import logo from '../../resources/logo.png'
import styles from './styles'

const ListToolbar = ({ hasSelectedLists}) => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Create List</Text>
        </TouchableHighlight>
        <Image style={styles.logo} source={logo} />
        <TouchableHighlight 
            style={styles.toolbarAction}
            disables={!hasSelectedLists}>
            <Text style={[styles.toolbarActionText, { color: !hasSelectedLists ? 'gray' :{}}]}>Delete</Text>
        </TouchableHighlight>

    </View>
)

export default ListToolbar
