import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    Animated, 
    TextInput,
    SectionList,
    SafeAreaView,
    FlatList,
    ScrollView,
    Image,
} from 'react-native'
import colors from '../../../assets/colors'
import { useCardAnimation } from '@react-navigation/stack';
import { current } from '@reduxjs/toolkit';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import Asset from '../Asset';

import NumberPad, { Input, Display } from '../../../lib/index';

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

export default function SendAmount() {

    const navigation = useNavigation();
    const route = useRoute();
    // const {username, uri, address} = route.params;
    // console.log({username, uri, address})

    let [fontsLoaded] = useFonts({
    Bold,
    Regular,
    SemiBold
    });
    if (!fontsLoaded) {
    return <AppLoading />;
    } else {
    return (
            <NumberPad>
                <SafeAreaView>
                <View>
                    <Text>sending to: </Text>
                </View>
                {[0, ].map((i) => (
                    <Display 
                    key={i} 
                    cursor
                    autofocus={true}
                    value={0}
                    style={styles.numberContainer}
                    textStyle={styles.number}
                    placeholderTextStyle={styles.numberInactive}
                    />
                ))}
                </SafeAreaView>
                <Input
                style={{backgroundColor: colors.primary}}
                height={400}
                backspaceIcon={<Ionicons name="ios-backspace" {...Input.iconStyle} />}
                // hideIcon={<Ionicons name="ios-arrow-down" {...Input.iconStyle} />}
                hideIcon={<View style={{backgroundColor: 'red', height: 1, width: 10}}></View>}
                />
            </NumberPad>
    );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    number: {
        fontFamily: 'Regular',
        fontSize: 32,
        color: colors.dark,
    },
    numberInactive: {
        fontFamily: 'Regular',
        fontSize: 32,
        color: colors.lightGray,
    },
    numberContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toContainer: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    textInput: {
        fontFamily: 'Regular',
        fontSize: 14,
        marginLeft: 8,
        color: colors.dark,
    },
    leftTo: {
        flexDirection: 'row',
        flex: 1,
    },
    sectionTitle: {
        fontFamily: 'SemiBold',
        fontSize: 16,
        color: colors.dark,
        marginTop: 32,
        marginLeft: 20,
        marginBottom: 16,
    },
    walletImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
    },
    mywallet: {
        left: 20,
        marginRight: 8,
        width: 100,
        paddingTop: 10,
        alignItems: 'center',
    },
    recent : {
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
    },
    recentTextContainer: {
        marginLeft: 16,
        width: '100%',
        justifyContent: 'center',
    },
    username: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: colors.dark,
    },
    address: {
        fontFamily: 'Regular',
        fontSize: 13.5,
        color: colors.gray,
        marginTop: 2,
    },
    myWalletName: {
        fontFamily: 'Regular',
        fontSize: 13.5,
        color: colors.gray,
        marginTop: 4,
    },
    profPic: {
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    forText: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 15
    }
  });
  