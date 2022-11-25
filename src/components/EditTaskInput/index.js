import React, { useState } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import styles from './styles'


const EditTaskInput = ({ closeModal, original, editFunction }) => {
  const [inputs, setInputes] = useState({
    name: original.name,
    description: original.description
  })

  const inputHandler = (name, value) => {
    setInputes({
      ...inputs,
      [name]: value
    })
  }

  const [errors, setErrors] = useState({
    name: '',
    description: ''
  })

  const validateForm = () => {
    const { name, description } = inputs
    const errors = {}

    if (!name) {
      errors.name = 'Name field can not be empty'
    }
    if (!description) {
      errors.description = 'Description field can not be empty'
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
            <TouchableOpacity style={styles.buttonBackground}>
            <Button
              title="Create"
              onPress={() => { register(); validateForm() }}
              style={styles.button}/>
            </TouchableOpacity>
        </View>
  )
}

export default EditTaskInput
