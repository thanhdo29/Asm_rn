import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth'; // Import Firebase auth
import { Colors, Fontsizes } from '../constants';
import CustomEditText from '../components/CustomEditText';

const SignupScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userState => {
      setUser(userState);
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber;
  }, []);

  const doSignup = () => {
    if (!name || !email || !password || !rePassword) {
      Alert.alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (password !== rePassword) {
      Alert.alert('Mật khẩu không khớp');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Tài khoản đã được tạo và đăng nhập');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Tài khoản đã tồn tại');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Email không hợp lệ');
        } else {
          Alert.alert('Đã xảy ra lỗi');
          console.error(error);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: Fontsizes.fs_32, fontWeight: 'bold', marginBottom: 23 }}>Đăng ký</Text>
      <CustomEditText placeholder='Họ tên' onChangeText={(txt) => { setName(txt) }} props={{placeholder:'Họ tên'}}/>
      <CustomEditText placeholder='Email' onChangeText={(txt) => { setEmail(txt) }} />
      <CustomEditText placeholder='Mật khẩu' secureTextEntry={true} onChangeText={(txt) => { setPassword(txt) }} />
      <CustomEditText placeholder='Nhập lại mật khẩu' secureTextEntry={true} onChangeText={(txt) => { setRePassword(txt) }} />
      <TouchableOpacity style={styles.btn} onPress={() => { doSignup() }}>
        <Text style={styles.text_btn}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20
  },
  btn: {
    backgroundColor: Colors.blue,
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop: 12

  },
  text_btn: {
    color: Colors.white,
    alignItems: 'center',
    fontSize: Fontsizes.fs_16
  }
});
