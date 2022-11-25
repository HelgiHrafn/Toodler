import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const EditBoardInput = ({ original, editFunction, closeModal }) => {
  const [inputs, setInputes] = useState({
    name: original.name,
    description: original.description,
    thumbnailPhoto: original.thumbnailPhoto
  })

  const inputHandler = (name, value) => {
    setInputes({
      ...inputs,
      [name]: value
    })
  }

  return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={inputs.name}
                onChangeText={text => inputHandler('name', text)} />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={inputs.description}
                onChangeText={text => inputHandler('description', text)} />
            <TextInput
                style={styles.input}
                placeholder="Link to Image"
                value={inputs.thumbnailPhoto}
                onChangeText={text => inputHandler('thumbnailPhoto', text)} />
            
            <TouchableOpacity 
            style={styles.buttonBackground}
            onPress={() => { editFunction(original, inputs); closeModal() }}>
                <Text style={styles.button} >Edit</Text>
            </TouchableOpacity>
        </View>
  )
}
export default EditBoardInput
