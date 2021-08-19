import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CreatePost from '../screens/CreatePost';
import {fetchFeed, loadWallet,} from '../state/hooks'
import Preview from '../components/Camera/Preview';
import SearchScreen from '../screens/Search';
import PostDetails from '../components/Home/PostDetails';
import StartScreen from '../onboarding/StartScreen';
import CreateWalletScreen from '../onboarding/CreateWalletScreen';
import ImportWalletScreen from '../onboarding/ImportWalletScreen';

const Stack = createStackNavigator();

const Navigator = ({navigation}) => {
  fetchFeed()
  loadWallet()

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="StartScreen">
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="CreateWalletScreen" component={CreateWalletScreen} />
          <Stack.Screen name="ImportWalletScreen" component={ImportWalletScreen} />
          <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
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
