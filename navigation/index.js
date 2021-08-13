import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile'
import colors from '../assets/colors'

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
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
                ? require('../assets/images/camera.png')
                : require('../assets/images/camera.png');
                return <Image source={iconName} style={{width: 34, height: 34}}
            resizeMode='contain' />;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width: 24, height: 24}}
            resizeMode='contain' />;
          },
          tabBarStyle: {
              borderTopColor: colors.black,
              backgroundColor: colors.white
          },
          tabBarLabel: () => null,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarBadge: 1}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}