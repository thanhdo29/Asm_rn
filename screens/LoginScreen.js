import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fontsizes } from '../constants'
import CustomEditText from '../components/CustomEditText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; // Import Firebase auth
import AsyncStorage from "@react-native-async-storage/async-storage"


const LoginScreen = () => {
  const navigation = useNavigation();
  const [userInput, setUserInput] = useState({ email: '', password: '' });

  const doLogin = () => {
    if (!userInput.email || !userInput.password) {
      alert('Vui lòng nhập đầy đủ email và mật khẩu');
      return;
    }

    auth()
      .signInWithEmailAndPassword(userInput.email, userInput.password)
      .then(() => {
        navigation.navigate('home2');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          alert('Người dùng không tồn tại!');
        } else if (error.code === 'auth/wrong-password') {
          alert('Sai mật khẩu!');
        } else {
          console.error(error);
          alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: Fontsizes.fs_32, fontWeight: 'bold', marginBottom: 23 }}>Đăng nhập</Text>
      <CustomEditText placeholder="Email" onChangeText={(txt) => setUserInput({ ...userInput, email: txt })} />
      <CustomEditText placeholder="Mật khẩu" secureTextEntry onChangeText={(txt) => setUserInput({ ...userInput, password: txt })} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.btn} onPress={doLogin}>
          <Text style={styles.text_btn}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('signup')}>
          <Text style={styles.text_btn}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: Colors.blue,
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop: 12,
    margin: 6
  },
  text_btn: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: Fontsizes.fs_16,

  },
})
