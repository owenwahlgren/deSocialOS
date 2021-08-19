import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile'
import CameraScreen from '../screens/camera'
import colors from '../assets/colors'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../assets/images/HomeActive.png')
                : require('../assets/images/HomeInactive.png');
            } else if (route.name === 'Profile') {
              iconName = focused 
                ? require('../assets/images/ProfileActive.png')
                : require('../assets/images/ProfileInactive.png');
            } else if (route.name === 'Camera') {
              iconName = focused 
                ? require('../assets/images/CameraIcon.png')
                : require('../assets/images/CameraIcon.png');
                return <Image source={iconName} style={{width: 34, height: 34}}
            resizeMode='contain' />;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width: 24, height: 24}}
            resizeMode='contain' />;
          },
          tabBarStyle: {
              borderTopColor: colors.gray,
              backgroundColor: colors.black,
              // position: 'absolute',
              // elevation: 0,
          },
          tabBarLabel: () => null,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen 
        name="Camera" 
        component={CameraScreen} 
        options={{
          headerShown: false
        }} />
        <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          title: 'user address/ens', 
          headerStyle: {
            backgroundColor: colors.black
          },headerTitleStyle: {
            color: colors.white
          }
          }} />
      </Tab.Navigator>
  );
}