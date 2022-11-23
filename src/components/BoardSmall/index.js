/* eslint-disable react/prop-types */
import React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './styles'

const BoardSmall = ({ board }) => {
  return (
        <View style={[styles.boardSmall, styles.coolShadow]}>
        <Text style={styles.name}>{board.name}</Text>
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: board.thumbnailPhoto }}
        />

    </View>
  )
}

export default BoardSmall
