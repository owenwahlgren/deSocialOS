import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import CameraScreen from '../screens/Camera';

const Stack = createStackNavigator();

const Navigator = ({navigation}) => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigator;
