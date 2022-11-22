import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = () => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Create board</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Delete</Text>
        </TouchableHighlight>

    </View>
);

export default Toolbar;