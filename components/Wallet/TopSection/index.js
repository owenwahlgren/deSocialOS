import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TouchableHighlight, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../../assets/colors'
import {useFeedData} from '../../../state/hooks'
import {useNavigation} from '@react-navigation/native';
import { useAccountInfo, useWallet } from '../../../state/hooks'
import { SOCIAL } from '../../../utils/contract'
import tokenIcons from '../../../assets/tokenIcons';

import { 
  useFonts,
  Poppins_400Regular as Regular,
  Poppins_500Medium as Medium,
  Poppins_600SemiBold as SemiBold,
  Poppins_700Bold as Bold,
  Poppins_800ExtraBold as ExtraBold,
  Poppins_900Black as Black,
} from '@expo-google-fonts/poppins'

export default function TopSection() {
  const wallet = useWallet()
  const info = useAccountInfo()
  const username = info[0] || wallet.address.toString().substring(0,12);
  const bio = info[1] || ""
  const ipfs = info[2] || ""
  const following = info[3] || 0
  const followers = info[4] || 0
  const pfp = 'https://ipfs.io/ipfs/' + ipfs

  const navigation = useNavigation();


  let [fontsLoaded] = useFonts({
    Bold,
    Regular,
    SemiBold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <SafeAreaView style={{backgroundColor: 'red'}}>
        <View style={styles.container}>
            <Text style={styles.usernameText}>@{username || wallet.address.toString().substring(0,16)}</Text>
            <Text style={styles.bigText}>$30,204.09</Text>
        </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.white,
    paddingLeft: 12,
    paddingTop: 10,
    paddingRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 160,
    height: 48,
    backgroundColor: colors.dark,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 8, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 5,
  },
  bigText: {
    fontFamily: 'Medium',
    fontSize: 28,
    color: colors.dark,
  },
  buttonText: {
    fontFamily: 'Medium',
    color: colors.lightest,
    fontSize: 15,
  },
  usernameText: {
    fontFamily: 'Medium',
    color: colors.dark,
    fontSize: 15,
    marginBottom: 12,
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'flex-end',
    backgroundColor: colors.outline,
  },
});
