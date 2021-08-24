import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './navigation'
import { Provider } from 'react-redux'
import store from './state'
import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'

export default function App() {
  return (
    <>
    <Provider store={store}>
      <StatusBar style="dark" hidden={false} />
      <Navigator />
    </Provider>
    </>
  );
}
