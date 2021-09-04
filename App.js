import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './navigation'
import { Provider } from 'react-redux'
import store from './state'
import { loadWalletAsync, fetchFeedDataAsync } from './state/actions'
export default function App() {

  console.log("App loaded\n loading async wallet to state...\nloading asyc feed to state...")
  useEffect(() =>{
    store.dispatch(loadWalletAsync())
    store.dispatch(fetchFeedDataAsync())
  }, [])

  return (
    <>
    <Provider store={store}>
      <StatusBar style="dark" hidden={false} />
      <Navigator />
    </Provider>
    </>
  );
}
