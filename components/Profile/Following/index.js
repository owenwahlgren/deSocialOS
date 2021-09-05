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

const Following = () => {

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
                <TouchableOpacity
                onPress={() => navigation.navigate('ProfileOtherUser')}
                >
                <Image 
                    style={styles.tokenImage}
                    source={{uri: 'https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png'}}
                />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <View style={styles.horizontalBox}>
                        <Text style={styles.tokenName}>@user</Text>
                        <TouchableOpacity>
                            <Text style={styles.tokenName}>follow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>     
        </TouchableOpacity>
        </>
    )
    }
}

export default Following;

const styles = StyleSheet.create({
    assetContainer: {
        flex: 1,
        width: '100%',
        paddingLeft: 12,
        paddingTop: 10, 
        marginTop: 2,
        paddingBottom: 10,  
        paddingRight: 12,
        backgroundColor: colors.white,
    },
    tokenName: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 15,
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