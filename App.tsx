import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomScreen from './screens/WelcomScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DetailProductScreen from './screens/DetailProductScreen';
import BottonTab from './navigation/BottonTab';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='welcom' component={WelcomScreen}/>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='signup' component={SignupScreen}/>
        <Stack.Screen name='detail' component={DetailProductScreen}/>
        <Stack.Screen name='home2' component={BottonTab}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({

})