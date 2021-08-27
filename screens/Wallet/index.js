import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import colors from '../../assets/colors'
import HeaderBar from '../../components/Wallet/HeaderBar'
import { useWallet } from '../../state/hooks'
import { provider } from '../../utils/contract'
export default function WalletScreen() {

    const [balance, setBalance] =  useState(0);
    const wallet = useWallet()

    useEffect( () => {
        (async () => {
            setBalance(JSON.parse(await provider.getBalance(wallet.address.toString()) / 10 ** 18))
        })();   
    })

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <HeaderBar />
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Wallet balance:</Text>
            <Text>{balance} MATIC</Text>
            </View>
        </SafeAreaView>
    )
}
