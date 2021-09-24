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
        <TouchableOpacity style={styles.assetContainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912'}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.tokenName}>Polygon</Text>
                    <Text style={styles.tokenName}>$30,204.09</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>MATIC</Text>
                    <Text style={styles.ticker}>26,038.52</Text>
                    </View>
                </View>
            </View>     
        </TouchableOpacity>

        <TouchableOpacity style={styles.assetContainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: tokenIcons.usdt}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.tokenName}>Tether</Text>
                    <Text style={styles.tokenName}>$3,507.97</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>USDT</Text>
                    <Text style={styles.ticker}>3,500.00</Text>
                    </View>
                </View>
            </View>     
        </TouchableOpacity><TouchableOpacity style={styles.assetContainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: tokenIcons.usdc}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.tokenName}>USD Coin</Text>
                    <Text style={styles.tokenName}>$4,103.67</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>USDC</Text>
                    <Text style={styles.ticker}>4,103.60</Text>
                    </View>
                </View>
            </View>     
        </TouchableOpacity>
        <TouchableOpacity style={styles.assetContainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: tokenIcons.dai}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.tokenName}>Dai</Text>
                    <Text style={styles.tokenName}>$4,103.67</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>DAI</Text>
                    <Text style={styles.ticker}>4,103.60</Text>
                    </View>
                </View>
            </View>     
        </TouchableOpacity>
        <TouchableOpacity style={styles.assetContainer}>
            <View style={styles.innerLeftContainer}>
                <Image 
                    style={styles.tokenImage}
                    source={{uri: tokenIcons.weth}}
                />
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.tokenName}>Wrapped ETH</Text>
                    <Text style={styles.tokenName}>$3,210.02</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>WETH</Text>
                    <Text style={styles.ticker}>1.00</Text>
                    </View>
                </View>
            </View>     
        </TouchableOpacity>
        </>
    )
    }
}

export default Asset;

const styles = StyleSheet.create({
    assetContainer: {
        flex: 1,
        width: '100%',
        paddingLeft: 16,
        paddingTop: 14, 
        marginTop: 1,
        paddingBottom: 14,  
        paddingRight: 16,
        backgroundColor: colors.white,
        borderBottomColor: colors.outline,
        borderBottomWidth: 1,
    },
    tokenName: {
        fontFamily: 'Regular',
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
    },
    horizontalBox: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
  });