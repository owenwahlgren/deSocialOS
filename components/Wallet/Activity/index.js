import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons'; 

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
        <View style={styles.commentcontainer}>
            <View style={styles.innerLeftContainer}>
                <TouchableOpacity
                onPress={() => navigation.navigate('ProfileOtherUser')}
                >
                <Image 
                    style={styles.avatar}
                    source={{uri: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912'}}
                />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                    <View style={styles.iconBox}>
                    <Ionicons name="send" size={14} color={colors.dark} style={{marginRight: 4}} />
                    <Text style={styles.tokenName}>Sent</Text>
                    </View>
                    <Text style={styles.tokenName}>- $20,938.14</Text>
                    </View>
                    <View style={styles.horizontalBox}>
                    <Text style={styles.ticker}>MATIC</Text>
                    <Text style={styles.ticker}>15,033.01</Text>
                    </View>
                </View>
            </View>     
        </View>
        </>
    )
    }
}

export default Activity;

const styles = StyleSheet.create({
    commentcontainer: {
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
    avatar: {
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
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });