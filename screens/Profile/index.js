import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions, Dimensions, FlatList, Animated } from 'react-native';
import AppLoading from 'expo-app-loading';
import InfoSection from '../../components/Profile/InfoSection'
import HeaderBar from '../../components/Profile/HeaderBar'
import {fetchAccountCollection, fetchAccountCreated, fetchAccountInfo} from '../../state/hooks'

import colors from '../../assets/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useWallet} from '../../state/hooks'



import CollapsibleTabView from '../../components/Profile/CollapsibleTabView';



const ProfileScreen = () => {
  const wallet = useWallet()
  fetchAccountCollection(wallet.address.toString())
  fetchAccountCreated(wallet.address.toString())
  fetchAccountInfo(wallet.address.toString())
    return (
      <>
      <View style={{position: 'absolute', flex: 1, width: '100%', zIndex: 100}}>
      <HeaderBar />
      </View>
      <CollapsibleTabView />
      </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.white
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
tabView: {
  flex: 1,
  padding: 10,
  backgroundColor: 'rgba(0,0,0,0.01)',
},
card: {
  borderWidth: 1,
  backgroundColor: '#fff',
  borderColor: 'rgba(0,0,0,0.1)',
  margin: 5,
  height: 150,
  padding: 15,
  shadowColor: '#ccc',
  shadowOffset: { width: 2, height: 2, },
  shadowOpacity: 0.5,
  shadowRadius: 3,
},
});