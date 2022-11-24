import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Picker } from '@react-native-picker/picker'


const CreateListInput = ({ addList, closeModal }) => {
  const [inputs, setInputes] = useState({
    name: '',
    color: ''
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
            <Picker
                style={styles.picker}
                selectedValue={inputs.color}
                onValueChange={value => inputHandler('color', value)}>
                  
                <Picker.Item label="fireOpal" value="#ee6352ff" />
                <Picker.Item label="emerald" value="#59cd90ff" />
                <Picker.Item label="ceruleanCrayola" value="#3fa7d6ff" />
                <Picker.Item label="maximumYellowRed" value="#fac05eff" />
                <Picker.Item label="vividTangerine" value="#f79d84ff" />
            </Picker>

            <TouchableOpacity
            style={styles.buttonBackground}
            onPress={() => { addList(inputs); closeModal() }}>
                <Text style={styles.button} >Create</Text>
            </TouchableOpacity>
        </View>
  )
}
export default CreateListInput
