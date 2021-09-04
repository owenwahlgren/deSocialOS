import React from 'react';
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
                <TouchableOpacity
                onPress={() => navigation.navigate('ProfileOtherUser')}
                >
                <Image 
                    style={styles.tokenImage}
                    source={{uri: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912'}}
                />
                </TouchableOpacity>
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
        paddingLeft: 12,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 12,
        backgroundColor: colors.white,
    },
    tokenName: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 16,
        marginBottom: 2,
    },
    ticker: {
        fontFamily: 'Regular',
        color: colors.gray,
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