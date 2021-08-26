import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import colors from '../../assets/colors'
import HeaderBar from '../../components/Wallet/HeaderBar'

export default function WalletScreen() {

    const balance = '1234';

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <HeaderBar />
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Wallet balance:</Text>
            <Text>{balance}</Text>
            </View>
        </SafeAreaView>
    )
}
