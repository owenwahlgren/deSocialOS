import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './navigation'
import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigator />
    </>
  );
}
