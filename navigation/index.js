import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CreatePost from '../screens/CreatePost';
import {fetchFeed, loadWallet, useWallet} from '../state/hooks'
import Preview from '../components/Camera/Preview';
import SearchScreen from '../screens/Search';
import PostDetails from '../components/Home/PostDetails';
import StartScreen from '../onboarding/StartScreen';
import CreateWalletScreen from '../onboarding/CreateWalletScreen';
import ImportWalletScreen from '../onboarding/ImportWalletScreen';
import ProfileSettings from '../components/Profile/ProfileSettings';



const Stack = createStackNavigator();

const Navigator = ({navigation}) => {
  loadWallet()
  fetchFeed()
  
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"StartScreen"}>
          <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="CreateWalletScreen" component={CreateWalletScreen} />
          <Stack.Screen name="ImportWalletScreen" component={ImportWalletScreen} />
          <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="PostDetails" component={PostDetails} />
          <Stack.Screen name="Preview" component={Preview} />
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
