import * as React from 'react';
import {useEffect, useState} from 'react'
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Pressable, TouchableOpacityComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile'
import CameraScreen from '../screens/Camera'
import colors from '../assets/colors'
import MessagesScreen from '../screens/Messages';
import WalletScreen from '../screens/Wallet';
import {fetchFeed, useWallet, fetchAccountInfo } from '../state/hooks'
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  
  console.log('BottomTabNav loaded')
  // fetchFeed()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../assets/images/HomeActive.png')
              : require('../assets/images/HomeInactive.png');
          } else if (route.name === 'Inbox') {
            iconName = focused 
              ? require('../assets/images/InboxActive.png')
              : require('../assets/images/InboxInactive.png');
          } else if (route.name === 'Wallet') {
          iconName = focused 
            ? require('../assets/images/WalletActive.png')
            : require('../assets/images/WalletInactive.png');
          } else if (route.name === 'Profile') {
          iconName = focused
            ? require('../assets/images/ProfileActive.png')
            : require('../assets/images/ProfileInactive.png');
          } else if (route.name === 'Camera') {
            iconName = focused 
              ? require('../assets/images/CameraActive.png')
              : require('../assets/images/CameraInactive.png');
              return  <Image 
              source={iconName} 
              style={{width: 30, height: 30}}
              resizeMode='contain'
              />;
          }

          // You can return any component that you like here!
          return ( 
          <Image source={iconName} style={{width: 26, height: 26}}
          resizeMode='contain' />
          );
        },
        tabBarStyle: {
            borderTopColor: colors.outline,
            backgroundColor: 'colors.white',
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen 
      name="Home"
      // children={()=><HomeScreen/>} 
      component={HomeScreen} 
      options={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: colors.white,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderTopWidth: 0,
          position: 'absolute',
        }
      }}

      />
      <Tab.Screen 
      name="Inbox" 
      component={MessagesScreen} 
      options={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: colors.white,
          backgroundColor: colors.white,
          position: 'absolute',
          borderTopWidth: 0,
        }
      }} 
      />
      <Tab.Screen 
      name="Camera" 
      component={CameraScreen} 
      options={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent', 
          position: 'absolute',
          borderTopColor: 'transparent',
          borderTopWidth: 0,
        },
      }} />
      <Tab.Screen 
      name="Wallet" 
      component={WalletScreen} 
      options={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: colors.white,
          backgroundColor: colors.white,
          position: 'absolute',
          borderTopWidth: 0,
        }
      }} />
      <Tab.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: colors.white,
          backgroundColor: colors.white,
          position: 'absolute',
          borderTopWidth: 0,
        }
        }} />
    </Tab.Navigator>
);

  
}