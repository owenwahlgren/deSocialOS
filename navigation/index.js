import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CameraScreen from '../screens/camera';
import CreatePost from '../screens/CreatePost';
import {fetchFeed, loadWallet, setWallet, useWallet} from '../state/hooks'
import { createNewWallet } from '../utils/wallet'

const Stack = createStackNavigator();

const Navigator = ({navigation}) => {
  fetchFeed()
  const wallet = createNewWallet()
  setWallet(wallet.privateKey.toString())

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeTabs" component={BottomTabNavigator} options={{title: 'Preview'}} />
          <Stack.Screen 
          name="CreatePost" 
          component={CreatePost} 
          options={{
            headerShown: true,
            title: 'Post'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigator;
