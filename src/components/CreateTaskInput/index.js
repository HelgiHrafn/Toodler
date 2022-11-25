import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const CreateTaskInput = ({ addTask, closeModal }) => {
  const [inputs, setInputes] = useState({
    name: '',
    description: ''
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
            <TouchableOpacity 
            style={styles.buttonBackground}
            onPress={() => { addTask(inputs); closeModal() }}>
                <Text style={styles.button} >Create</Text>
            </TouchableOpacity>
        </View>
  )
}
export default CreateTaskInput
