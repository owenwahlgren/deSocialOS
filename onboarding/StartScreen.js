import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Touchable, Image } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../assets/colors'
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';


import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const buttonWidth = Dimensions.get("window").width - 32;

export default function StartScreen() {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Bold,
        Regular,
        SemiBold,
        Medium,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style={styles.container}>
            <Video 
                source={require('../assets/videos/kayak.mp4')}
                style={styles.video}
                resizeMode={'cover'}
                shouldPlay
                isLooping
            />
            <Image 
                source={require('../assets/images/logowhite.png')}
                style={{height: '100%', width: 300, alignSelf: 'center', marginBottom: 120}}
                resizeMode={'contain'}
            />
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('CreateWalletScreen')}
            >
                <Text style={styles.text}>Create a new wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ImportWalletScreen')}
            >
                <Text style={styles.text}>Import an existing wallet</Text>
            </TouchableOpacity>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 50,
    },
    video: {
        height,
        width,
        position: 'absolute',
        borderRadius: 2,
        flex: 1,
    },
    button: {
        height: 52,
        width: '86%',
        backgroundColor: colors.primary,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,

        elevation: 6,
    },
    text: {
        color: 'white',
        fontFamily: 'SemiBold',
        fontSize: 16,
        alignSelf: 'center',
    },
  });
