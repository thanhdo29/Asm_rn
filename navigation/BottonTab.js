import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import SettingScreen from '../screens/SettingScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';


const BottonTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconComponent;

                    if (route.name === 'home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                        iconComponent = <Icon name={iconName} size={size} color={color} />;
                    } else if (route.name === 'favourite') {
                        iconName = focused ? 'heart' : 'heart-outline';
                        iconComponent = <Icon name={iconName} size={size} color={color} />;
                    } else if (route.name === 'setting') {
                        iconName = focused ? 'settings' : 'settings-outline';
                        iconComponent = <Icon1 name={iconName} size={size} color={color} />;
                    }

                    return iconComponent;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                headerShown: false

            })}
        >
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='favourite' component={FavouriteScreen} />
            <Tab.Screen name='setting' component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default BottonTab