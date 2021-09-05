import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import colors from '../../../assets/colors'
import FollowingFollowersHeaderBar from '../FollowingFollowersHeaderBar';
import FollowingFollowersCollapsibleTabView from '../FollowingFollowersCollapsibleTabView';

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

export default function FollowingFollowers({navigation}) {

    return (
        <>
        <View style={{position: 'absolute', flex: 1, width: '100%', zIndex: 100}}>
        <FollowingFollowersHeaderBar />
        </View>
        <View style={{position: 'absolute', bottom: 0, width: '100%', zIndex: 100, justifyContent: 'flex-end'}}>
        </View>
        <FollowingFollowersCollapsibleTabView />
        </>
    )
}