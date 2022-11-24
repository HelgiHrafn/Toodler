import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'

const CreateBoardInput = ({closeModal}) => {
  const [inputs, setInputes] = useState({
    name: '',
    imageLink: ''
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
                placeholder="Name"
                value={inputs.name}
                onChangeText={text => inputHandler('name', text)} />
            <TextInput
                placeholder="Link to Image"
                value={inputs.imageLink}
                onChangeText={text => inputHandler('imageLink', text)} />
            <TouchableOpacity onPress={() => {console.log(inputs);closeModal()}}><Text>text</Text></TouchableOpacity>
        </View>
  )
}
export default CreateBoardInput
