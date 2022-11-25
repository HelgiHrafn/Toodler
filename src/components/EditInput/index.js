import React, { useState } from 'react'
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native'
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
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    thumbnailPhoto: ''
  })

  const validateForm = () => {
    const { name, thumbnailPhoto } = inputs
    const errors = {}

    if (!name) {
      errors.name = 'Name can not be empty'
    }
    if (!thumbnailPhoto) {
      errors.thumbnailPhoto = 'Image field can not be empty'
    }

    setErrors(errors)

    return Object.keys(errors).length > 0 ? false : true
  }

  const register = () => {
    if (validateForm()) {
      editFunction(original, inputs)
      closeModal()
    }
  }

  return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={inputs.name}
                onChangeText={text => inputHandler('name', text)} />
            <Text>{errors.name}</Text>
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={inputs.description}
                onChangeText={text => inputHandler('description', text)} />
            <Text>{errors.description}</Text>
            <TextInput
                style={styles.input}
                placeholder="Link to Image"
                value={inputs.thumbnailPhoto}
                onChangeText={text => inputHandler('thumbnailPhoto', text)} />
            <Text>{errors.thumbnailPhoto}</Text>

            <TouchableOpacity style={styles.buttonBackground}>
            <Button
              title="Create"
              onPress={() => { register(); validateForm() }}
              style={styles.button}/>
            </TouchableOpacity>
        </View>
  )
}
export default EditBoardInput
