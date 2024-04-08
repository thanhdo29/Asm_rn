import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const WelcomScreen = () => {
    const navigation=useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('login');
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chào mừng đến với Ứng dụng của chúng tôi!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Thông tin sinh viên</Text>
        <Text style={styles.contentText}>Họ và tên: Đỗ Tuấn Thành</Text>
        <Text style={styles.contentText}>MSSV: PH34899</Text>
      </View>
    </View>
  )
}

export default WelcomScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      header: {
        marginBottom: 20,
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      content: {
        alignItems: 'center',
      },
      contentText: {
        fontSize: 18,
        marginBottom: 10,
      },
})