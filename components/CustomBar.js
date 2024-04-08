import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants'

const CustomBar = ({ icon_menu, icon_avt }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:27, marginTop:20, marginBottom:20 }}>
      <Image style={styles.img} source={{uri: icon_menu}} />
      <Image style={styles.img} source={{uri:icon_avt}} />
    </View>
  )
}

export default CustomBar

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
    borderRadius:50
  }
})


