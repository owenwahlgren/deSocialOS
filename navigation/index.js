import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CameraScreen from '../screens/Camera';
import CreatePost from '../screens/CreatePost';
import Preview from '../components/Camera/Preview';
import SearchScreen from '../screens/Search';
import PostDetails from '../components/Home/PostDetails';

const Stack = createStackNavigator();

const Navigator = ({navigation}) => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
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
