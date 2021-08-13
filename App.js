import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation'
import HomeScreen from './screens/home'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
    </>
  );
}
