import React, { useState } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'


const EditListInput = ({ original, editFunction, closeModal }) => {
  const [inputs, setInputes] = useState({
    name: original.name,
    color: original.color
  })

  const inputHandler = (name, value) => {
    setInputes({
      ...inputs,
      [name]: value
    })
  }

  const [errors, setErrors] = useState({
    name: '',
    color: ''
  })

  const validateForm = () => {
    const { name, color } = inputs
    const errors = {}

    if (!name) {
      errors.name = 'Name can not be empty'
    }
    if (color === '' || color === '0') {
      errors.color = 'Please select a color from the dropdown menu'
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
            <Text>Choose color:</Text>
            <Picker
                style={styles.picker}
                selectedValue={inputs.color}
                onValueChange={value => inputHandler('color', value)}>
                <Picker.Item label='Please select an option...' value='0' />
                <Picker.Item label="Fire Opal" value="#ee6352ff" />
                <Picker.Item label="Emerald Green" value="#59cd90ff" />
                <Picker.Item label="Cerulean Crayola" value="#3fa7d6ff" />
                <Picker.Item label="Maximum Yellow Red" value="#fac05eff" />
                <Picker.Item label="Vivid Tangerine" value="#f79d84ff" />
                <Picker.Item label="Uranian Blue" value="#a3d9ffff" />
                <Picker.Item label="Chineese Violet" value="#7e6b8fff" />
                <Picker.Item label="Celadon" value="#96e6b3ff" />
                <Picker.Item label="Amaranth" value="#da3e52ff" />
                <Picker.Item label="Corn" value="#f2e94eff" />
            </Picker>
            <Text>{errors.color}</Text>
            <TouchableOpacity style={styles.buttonBackground}>
            <Button
              title="Edit"
              onPress={() => { register(); validateForm() }}
              style={styles.button}/>
            </TouchableOpacity>
        </View>
  )
}

export default EditListInput