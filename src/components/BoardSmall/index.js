/* eslint-disable react/prop-types */
import React from 'react'
import { Image, View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

const BoardSmall = ({ board, navigation }) => {
  return (

        <TouchableHighlight onPress={() => navigation.navigate('Board', { board })}>
          <View style={[styles.boardSmall, styles.coolShadow]}>
            <Text style={styles.name}>{board.name}</Text>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: board.thumbnailPhoto }}
            />
          </View>
        </TouchableHighlight>
  )
}

export default BoardSmall
