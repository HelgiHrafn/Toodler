/* eslint-disable react/prop-types */
import React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './styles'

const BoardSmall = ({ name, thumbnailPhoto }) => {
  return (
        <View style={[styles.boardSmall, styles.coolShadow]}>
        <Text style={styles.name}>{name}</Text>
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: thumbnailPhoto }}
        />

    </View>
  )
}

export default BoardSmall
