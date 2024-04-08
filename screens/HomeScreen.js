import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBar from '../components/CustomBar'
import ListProductHot from '../components/ListProductHot'
import ListProductNew from '../components/ListProductNew'
import ListProductViewed from '../components/ListProductViewed'
import Banner from '../components/Banner'
import { useTheme } from '../components/MyTheme'; 
import { Colors } from '../constants'

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ScrollView style={[styles.container,{backgroundColor:theme === 'purple' ? Colors.blue : Colors.white } ]}>
      <View >
        <CustomBar icon_avt={'https://i.pinimg.com/564x/70/da/29/70da29e0cd3e98f2ba4bb67bd0bde726.jpg'} icon_menu={'https://i.pinimg.com/564x/8a/9d/6e/8a9d6e85a93b8b3a8002896da71882a3.jpg'} />
        <Banner />
        <View style={styles.listPro}>
          <ListProductHot />
          <ListProductNew />
          <ListProductViewed />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  listPro: {
    marginHorizontal: 27
  }
})