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
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


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
              <Text style={styles.total}>Balance</Text>
              <Text style={styles.bigText}>$41,025.75</Text>
            </View>
            <View style={styles.bottomButtons}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('SendAssetScreen')}
              >
              <View style={styles.innerButton}>
                <Feather name="send" size={22} color={colors.dark} />
                <Text style={styles.buttonText}>Send</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('AccountModal')}
              >
              <View style={styles.innerButton}>
                <Ionicons name="qr-code" size={22} color={colors.dark} />
                <Text style={styles.buttonText}>Receive</Text>
              </View>
            </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 38,
    paddingRight: 38,
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
  },
  bigText: {
    fontFamily: 'SemiBold',
    fontSize: 32,
    color: colors.dark,
    marginTop: 2,
  },
  card: {
    width: '100%',
    backgroundColor: colors.white,
    height: 86,
    marginTop: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    fontFamily: 'Regular',
    fontSize: 13.5,
    color: colors.gray,
  },
  button: {
    backgroundColor: colors.white, 
    width: 148, 
    height: 52, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.outline,
  },
  bottomButtons: {
    flexDirection: 'row',
    marginTop: 16,
    width: '100%',
    justifyContent: 'space-between',
  },
  innerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
  fontFamily: 'Regular', 
  color: colors.dark, 
  fontSize: 13.5,
  marginLeft: 8,
  }
});
