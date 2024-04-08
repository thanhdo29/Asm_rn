import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'

const CustomEditText = ({ placeholderTextColor, ...props }) => {
  return (
    <TextInput {...props} style={[styles.input, props.style]} placeholderTextColor={placeholderTextColor || 'gray'} />
  )
}


export default CustomEditText

const styles = StyleSheet.create({
  input:{
    padding:6,
    borderWidth: 1,
    borderColor: 'black',
    margin:5,
    borderRadius:7,
    width:'100%',
    marginBottom:10
}
})


