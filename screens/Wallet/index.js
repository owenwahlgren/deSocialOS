import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import colors from '../../assets/colors'
import HeaderBar from '../../components/Wallet/HeaderBar'
import BottomBar from '../../components/Wallet/BottomBar'
import { useWallet } from '../../state/hooks'
import { provider } from '../../utils/contract'

import WalletCollapsibleTabView from '../../components/Wallet/WalletCollapsibleTabView';

import AppLoading from 'expo-app-loading';

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins';

export default function WalletScreen() {

    const [balance, setBalance] =  useState(0);
    const wallet = useWallet()

    useEffect( () => {
        (async () => {
            setBalance(JSON.parse(await provider.getBalance(wallet.address.toString()) / 10 ** 18))
        })();   
    }) 

    return (
        <>
        <View style={{position: 'absolute', flex: 1, width: '100%', zIndex: 100}}>
        <HeaderBar />
        </View>
        <WalletCollapsibleTabView />
        </>
    )
}