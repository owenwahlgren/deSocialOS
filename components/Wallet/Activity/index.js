import React, {useState, useEffect } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TouchableHighlight, FlatList} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons'; 
import tokenIcons from '../../../assets/tokenIcons';
import { getPrice } from '../../../utils/tokenPrice'
import { useWallet } from '../../../state/hooks'
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
import { TabBarItem } from 'react-native-tab-view';

const Activity = (props) => {

    const navigation = useNavigation();
    const item = props.post

    // NOT FOR PROD
    // const address = useWallet().address
    const address = '0x94debc57081c4c58dd69f4dfce589b82fc3c2866'
    // console.log(item, address)
    // 
    
    var dict = {
        'WETH': tokenIcons.weth,
        "MATIC": tokenIcons.matic,
        "USDC": tokenIcons.usdc,
        'USDT': tokenIcons.usdt
    }

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
        {item.from.toLowerCase() == address.toLowerCase() ? 
        <View style={styles.activitycontainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: dict[item.tokenSymbol] ? dict[item.tokenSymbol] : tokenIcons.matic}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <View style={styles.iconBox}>
                    <Text style={styles.tokenName}>Sent</Text>
                    </View>
                    <Text style={styles.tokenName2}>$</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>{item.tokenSymbol}</Text>
                    <Text style={styles.ticker}>{parseInt(item.value) / (10 ** parseInt(item.tokenDecimal)) }</Text>
                    </View>
                </View>
            </View>     
        </View>
        :
        <View style={styles.activitycontainer}>
        <View style={styles.innerLeftContainer}>
            <Image 
                style={styles.tokenImage}
                source={{uri: dict[item.tokenSymbol] ? dict[item.tokenSymbol] : tokenIcons.matic}}
            />
            <View style={styles.textContainer}>
                <View style={styles.horizontalBox}>
                <View style={styles.iconBox}>
                <Text style={styles.tokenName}>Recieved</Text>
                </View>
                <Text style={styles.recievedText}>$</Text>
                </View>
                <View style={styles.horizontalBox}>
                <Text style={styles.ticker}>{item.tokenSymbol}</Text>
                <Text style={styles.ticker}>{parseInt(item.value) / (10 ** parseInt(item.tokenDecimal)) }</Text>
                </View>
            </View>
        </View>     
    </View>    
      }
            



        {/* FAILED COMPONENT 
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
        </TouchableOpacity> */}

        </>
    )
    }
}

export default Activity;

const styles = StyleSheet.create({
    activitycontainer: {
        flex: 1,
        width: '100%',
        paddingLeft: 16,
        paddingTop: 14, 
        marginTop: 2,
        paddingBottom: 14,  
        paddingRight: 16,
        backgroundColor: colors.white,
        borderBottomColor: colors.outline,
        borderBottomWidth: 1,
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