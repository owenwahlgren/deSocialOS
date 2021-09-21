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
        <View style={styles.container}>
            <View style={styles.card}>
            <View> 
            <TouchableOpacity style={{backgroundColor: colors.lightest, borderWidth: 1, borderColor: colors.outline, paddingHorizontal: 14, paddingVertical: 2, borderRadius: 50, marginTop: 8}}>
              <Text style={{fontFamily: 'Regular', fontSize: 11.5, color: colors.gray}}>0xajk4...2098</Text>
            </TouchableOpacity>
            </View>
            <Text style={styles.total}>Total Balance:</Text>
            <Text style={styles.bigText}>$41,025.75</Text>
            </View>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('SendModal')}
              >
                <Text style={{fontFamily: 'Regular', color: colors.white, fontSize: 15}}>Send</Text>
              </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
  },
  bigText: {
    fontFamily: 'Medium',
    fontSize: 32,
    color: colors.dark,
    marginTop: 4,
  },
  card: {
    width: '100%',
    backgroundColor: colors.white,
    height: 140,
    marginTop: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  total: {
    fontFamily: 'Regular',
    fontSize: 13.5,
    marginTop: 26,
    color: colors.gray,
  },
  button: {
    backgroundColor: colors.primary, 
    width: 140, 
    height: 42, 
    marginTop: 16,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 6,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .25,
    shadowRadius: 3,

    elevation: 4,
  }
});
