import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import {createStackNavigator, CardStyleInterpolators, TransitionPresets} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {fetchFeed, loadWallet, useWallet } from '../state/hooks'
import SearchScreen from '../screens/Search';
// import PostDetails from '../components/Home/PostDetails';
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
import HomeScreen from '../screens/Home';
import PostDeets from '../screens/PostDeets';
import ProfileOtherUser from '../screens/ProfileOtherUser';
import TsxPending from '../components/Alerts/TsxPending'
import AccountModal from '../components/Modals/AccountModal';
import FollowingFollowers from '../components/Profile/FollowingFollowers';
import ProfilePicModal from '../components/Modals/ProfilePicModal';
import PostDetails from '../screens/PostDetails';
import SendModal from '../components/Modals/SendModal';
import ScanModal from '../components/Modals/ScanModal';

const height = Dimensions.get("window").height;

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Navigator = ({navigation}) => {

  console.log("Nav index loaded")
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName={"HomeTabs"} 
      screenOptions={{
        headerShown: false,
      }} 
      >
      <Stack.Group>
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="CreateWalletScreen" component={CreateWalletScreen} />
        <Stack.Screen name="ImportWalletScreen" component={ImportWalletScreen} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{gestureEnabled: false}} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        {/* <Stack.Screen name="PostDetails" component={PostDetails} /> */}
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="VideoPreview" component={VideoPreview} options={{gestureEnabled: false, cardStyleInterpolator: forFade}}/>
        <Stack.Screen name="CreatePost" component={CreatePost} options={{gestureEnabled: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileOtherUser" component={ProfileOtherUser} />
        <Stack.Screen name="FollowingFollowers" component={FollowingFollowers} />
        
        <Stack.Screen 
        name="PostDeets" 
        component={PostDeets} 
        sharedElements={(route) => {
          return [route.params.item.id];
        }}
        />
      </Stack.Group>

      <Stack.Group 
      screenOptions={{
        cardOverlayEnabled: true,
        presentation: 'transparentModal',
        headerShown: false,
        gestureEnabled: true,
        gestureResponseDistance: height,
        }}>
        <Stack.Screen 
        options={{
          ...TransitionPresets.ModalTransition
        }}
        name='AccountModal' 
        component={AccountModal} 
        cardOverlayEnabled={true}
        /> 

        <Stack.Screen 
        options={{
          ...TransitionPresets.ModalTransition
        }}
        name='SendModal' 
        component={SendModal} 
        cardOverlayEnabled={true}
        /> 

        <Stack.Screen  
        name="PostDetails" 
        component={PostDetails} 
        options={{
          ...TransitionPresets.SlideFromRightIOS
        }} 
        />

      </Stack.Group>
      <Stack.Group
      screenOptions={{
        cardOverlayEnabled: true,
        presentation: 'transparentModal',
        headerShown: false,
        gestureEnabled: true,
        gestureResponseDistance: height,
        }}>
        <Stack.Screen 
          options={{
            ...TransitionPresets.ModalFadeTransition
          }}
          name='ProfilePicModal' 
          component={ProfilePicModal} 
          />

          <Stack.Screen 
          options={{
            ...TransitionPresets.ModalSlideFromBottomIOS
          }}
          name='ScanModal' 
          component={ScanModal} 
          />
      </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
);

}
  

export default Navigator;
