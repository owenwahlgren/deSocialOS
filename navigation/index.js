import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {fetchFeed, loadWallet, useWallet} from '../state/hooks'
import SearchScreen from '../screens/Search';
import PostDetails from '../components/Home/PostDetails';
import StartScreen from '../onboarding/StartScreen';
import CreateWalletScreen from '../onboarding/CreateWalletScreen';
import ImportWalletScreen from '../onboarding/ImportWalletScreen';
import ProfileSettings from '../components/Profile/ProfileSettings';
import WalletScreen from '../screens/Wallet';
import MessagesScreen from '../screens/Messages';
import CameraScreen from '../screens/Camera';
import EditProfile from '../components/Profile/EditProfile';
import VideoPreview from '../screens/VideoPreview';
import CreatePost from '../screens/CreatePost';



const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

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
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen 
          name="PostDetails" 
          component={PostDetails} 
          screenOptions={{
            gestureEnabled: true,
            cardStyle: {
              backgroundColor: 'transparent'
            }
          }}
          />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="VideoPreview" component={VideoPreview} options={{gestureEnabled: false, cardStyleInterpolator: forFade}}/>
          <Stack.Screen name="CreatePost" component={CreatePost} options={{gestureEnabled: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigator;
