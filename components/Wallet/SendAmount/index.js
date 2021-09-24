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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

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
    const insets = useSafeAreaInsets();

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
        <>
            <NumberPad>
                    <View style={styles.assetContainer}>
                        <Image 
                            source={{uri: 'https://s2.coinmarketcap.com/static/img/coins/200x200/825.png'}}
                            style={styles.tokenImage}
                        />
                        <View style={{marginLeft: 8}}>
                            <Text style={styles.tokenText}>Tether </Text>
                            <Text style={styles.subTokenText}>$123.23 available</Text>
                        </View>
                    </View>
                    
                {[0, ].map((i) => (
                    <>
                    <View style={{flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 20}}>
                        <TouchableOpacity style={styles.sideButton}>
                            <Text style={{fontFamily: 'SemiBold', fontSize: 11.5, color: colors.gray}}>
                                Max
                            </Text>
                        </TouchableOpacity>
                        <View style={{marginRight: 10, marginLeft: 10, flex: 1}}>
                            <View style={styles.currency}>
                                    <Text style={styles.currencyText}>USD </Text>
                            </View>
                            <Display 
                            key={i} 
                            cursor={false}
                            cursrStyle={styles.cursrStyle}
                            autofocus={true}
                            value={0}
                            style={styles.numberContainer}
                            activeStyle={styles.activeStyle}
                            textStyle={styles.number}
                            placeholderTextStyle={styles.numberInactive}
                            />
                            <View style={styles.currencyBottom}>
                                    <Text style={styles.currencyBottomText}>12345.67890 USDT</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.sideButton}>
                            <Ionicons name="ios-swap-vertical" size={20} color={colors.gray} />
                        </TouchableOpacity>
                    </View>
                    </>
                ))}
                <Input
                style={{backgroundColor: 'red', justifyContent: 'center'}}
                height={372}
                backspaceIcon={<Ionicons name="ios-backspace" size={24} style={{color: colors.dark}} />}
                // hideIcon={<Ionicons name="ios-arrow-down" {...Input.iconStyle} />}
                // hideIcon={<View style={{backgroundColor: 'red', height: 10, width: 100}}></View>}
                />
            </NumberPad>
            <SafeAreaView style={styles.safeArea}>
                    <TouchableOpacity 
                    onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                    style={styles.button}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </>
    );
    }
}

const styles = StyleSheet.create({
    assetContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: colors.white, 
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.outline,
    },
    currency: {
        alignItems: 'center', 
        marginBottom: 10,
    },
    currencyText: {
        color: colors.dark,
        fontFamily: 'Medium',
        fontSize: 15,
    },
    currencyBottom: {
        alignItems: 'center', 
        marginTop: 16,
    },
    currencyBottomText: {
        alignItems: 'center', 
        fontFamily: 'Medium',
        color: colors.lightGray
    },
    number: {
        fontFamily: 'SemiBold',
        fontSize: 42,
        color: colors.dark,
    },
    numberInactive: {
        fontFamily: 'SemiBold',
        fontSize: 42,
        color: colors.dark,
    },
    numberContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    activeStyle: {
        backgroundColor: colors.white,
    },
    safeArea: {
        width: '100%',
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.dark,
        width: '72%',
        height: 48,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 9,
    },
    buttonText: {
        fontFamily: 'Medium',
        color: colors.white,
        fontSize: 15,
    },
    tokenImage: {
        height: 42,
        width: 42,
    },
    tokenText: {
        fontFamily: 'Medium',
        color: colors.dark,
        fontSize: 15,
    },
    subTokenText: {
        fontFamily: 'Regular',
        color: colors.gray,
        fontSize: 13.5

    },
    sideButton: {
        borderWidth: 1,
        borderColor: colors.outline,
        width: 42,
        height: 42,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
  