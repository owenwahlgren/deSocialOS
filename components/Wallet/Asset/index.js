import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';


const width = Dimensions.get("window").width;
const height = width * 1.618;

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'
import tokenIcons from '../../../assets/tokenIcons';

const Asset = () => {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Bold,
        Regular,
        SemiBold,
        Medium
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <>
        <View style={styles.assetContainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: tokenIcons.matic}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.leftBox}>
                        <Text style={styles.tokenName}>Polygon</Text>
                        <Text style={styles.ticker}>26,038.52 MATIC</Text>
                    </View>
                    <View style={styles.rightBox}>
                        <Text style={styles.amount}>$30,204.09</Text>
                    </View>
                </View>
            </View>     
        </View>

        <View style={styles.assetContainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: tokenIcons.usdc}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.leftBox}>
                        <Text style={styles.tokenName}>USD Coin</Text>
                        <Text style={styles.ticker}>26,038.52 USDC</Text>
                    </View>
                    <View style={styles.rightBox}>
                        <Text style={styles.amount}>$26,034.09</Text>
                    </View>
                </View>
            </View>     
        </View>
        </>
    )
    }
}

export default Asset;

const styles = StyleSheet.create({
    assetContainer: {
        flex: 1,
        width: '100%',
        paddingLeft: 20,
        paddingTop: 12, 
        marginTop: 1,
        paddingBottom: 12,  
        paddingRight: 20,
        backgroundColor: colors.white,
    },
    tokenName: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 15,
        marginBottom: 2,
    },
    amount: {
        fontFamily: 'Medium',
        color: colors.dark,
        fontSize: 15,
        marginBottom: 2,
    },
    ticker: {
        fontFamily: 'Regular',
        color: colors.lightGray,
        fontSize: 13.5,
    },
    tokenImage: {
        width: 46,
        height: 46,
        borderRadius: 50,
        resizeMode: 'cover',
    },
    innerLeftContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    horizontalBox: {
        flex: 1, 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftBox: {
        flex: 1,
    },
    rightBox: {
        justifyContent: 'center',
    }
  });