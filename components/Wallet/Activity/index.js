import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons'; 
import tokenIcons from '../../../assets/tokenIcons';

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

const Activity = () => {

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
        {/* SENT COMPONENT  */}
        <TouchableOpacity style={styles.activitycontainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: tokenIcons.matic}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <View style={styles.iconBox}>
                    <Text style={styles.tokenName}>Sent</Text>
                    </View>
                    <Text style={styles.tokenName2}>- $20,938.14</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>Matic</Text>
                    <Text style={styles.ticker}>15,033.01 MATIC</Text>
                    </View>
                </View>
            </View>     
        </TouchableOpacity>


        {/* RECIEVED COMPONENT  */}
        <TouchableOpacity style={styles.activitycontainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: tokenIcons.usdc}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <View style={styles.iconBox}>
                    <Text style={styles.tokenName}>Recieved</Text>
                    </View>
                    <Text style={styles.recievedText}>$12,472.12</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>USD Coin</Text>
                    <Text style={styles.ticker}>12,472.12 USDC</Text>
                    </View>
                </View>
            </View>     
        </TouchableOpacity>


        {/* FAILED COMPONENT  */}
        <TouchableOpacity style={styles.activitycontainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: tokenIcons.usdt}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <View style={styles.iconBox}>
                    <Text style={styles.tokenName}>Failed</Text>
                    </View>
                    <Text style={styles.lightText}>$0.00</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>Tether</Text>
                    <Text style={styles.ticker}>0.00 USDT</Text>
                    </View>
                </View>
            </View>     
        </TouchableOpacity>

        </>
    )
    }
}

export default Activity;

const styles = StyleSheet.create({
    activitycontainer: {
        flex: 1,
        width: '100%',
        paddingLeft: 12,
        paddingTop: 10, 
        marginTop: 2,
        paddingBottom: 10,  
        paddingRight: 12,
        backgroundColor: colors.white
        // borderBottomWidth: 1,
        // borderBottomColor: colors.outline
    },
    tokenName: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 16,
    },
    tokenName2: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 16,
    },
    recievedText: {
        fontFamily: 'Regular',
        color: colors.green,
        fontSize: 16,
    },
    lightText: {
        fontFamily: 'Regular',
        color: colors.lightGray,
        fontSize: 16,
    },
    ticker: { 
        fontFamily: 'Regular',
        color: colors.lightGray,
        fontSize: 13.5,
    },
    tokenImage: {
        width: 46,
        height: 46,
        borderRadius: 100,
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
    },
    horizontalBox: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });