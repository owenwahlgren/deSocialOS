import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import colors from '../../assets/colors'
import HeaderBar from '../../components/Messages/HeaderBar'

export default function MessagesScreen() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <HeaderBar />
            <Text>Notifications for likes, comments, & follows, bids, buys, and eventually dms. anything else?</Text>
        </SafeAreaView>
    )
}
