import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import colors from '../../assets/colors'
import BottomBar from '../../components/Wallet/BottomBar'
import TopSection from '../../components/Wallet/TopSection';
import { useWallet } from '../../state/hooks'
import { provider } from '../../utils/contract'
import HeaderBar from '../../components/Wallet/HeaderBar';
import SendTo from '../../components/Wallet/SendTo';
import SendAssetHeader from '../../components/Wallet/SendAssetHeader';
import SendAmount from '../../components/Wallet/SendAmount';

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

export default function SendAmountScreen() {

    return (
        <>
        <View style={{flex: 1, backgroundColor: colors.white}}>
        <SendAssetHeader />
        <SendAmount />
        </View>
        </>
    )
}