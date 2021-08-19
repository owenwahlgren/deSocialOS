import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './navigation'
import HomeScreen from './screens/home'
import { Provider } from 'react-redux'
import store from './state'


export default function App() {
  return (
    <>
    <Provider store={store}>
      <StatusBar style="light" />
      <Navigator />
    </Provider>
    </>
  );
}
