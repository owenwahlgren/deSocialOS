import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Touchable, SafeAreaView, Alert, FlatList, TextInput } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../assets/colors'
import AppLoading from 'expo-app-loading';
import {useNavigation} from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import * as Clipboard from 'expo-clipboard';
import { createWalletFromKey } from '../utils/wallet'
import { setWallet } from '../state/hooks'


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

export default function ImportWalletScreen() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState("");

    let [fontsLoaded] = useFonts({
        Bold,
        Regular,
        SemiBold
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <Entypo 
                name="chevron-left" 
                size={30} 
                color={colors.dark} 
                onPress={() => navigation.goBack()}
                />
                <Text style={{fontSize: 24, fontFamily: 'Bold', color: colors.dark, marginTop: 24}}>Sign in with your private key</Text>
                <Text style={{fontSize: 14, fontFamily: 'Regular', color: colors.gray, marginTop: 16}}>Paste your private key string here:</Text>
                <TextInput 
                style={{
                  width: '100%', 
                  height: 200, 
                  backgroundColor: colors.lightest, 
                  marginTop: 24,
                  paddingLeft: 16,

                  }}
                  onChangeText = {onChangeText}
                  placeholder={'Private key...'}
                />
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => {
                const wallet = createWalletFromKey(text)
                setWallet(wallet)
                navigation.navigate('HomeTabs')
            }}>
                <Text style={styles.text}>Done</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 80,
        backgroundColor: colors.white
    },
    mainView: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    button: {
        height: 52,
        width: '90%',
        backgroundColor: colors.primary,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    text: {
        color: 'white',
        fontFamily: 'SemiBold',
        fontSize: 16,
        alignSelf: 'center',
    },
    title: {
        fontFamily: 'Regular',
        fontSize: 15,
        color: colors.gray,
    },
    item: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    }
  });
