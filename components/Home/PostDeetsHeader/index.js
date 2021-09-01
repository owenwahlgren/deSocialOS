import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Touchable } from 'react-native'
import Constant from 'expo-constants'
import colors from '../../../assets/colors';
import AppLoading from 'expo-app-loading';
import { BlurView } from 'expo-blur';
import {useNavigation} from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons'; 

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

const PostDeetsHeader = () => {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Bold,
        Regular,
        SemiBold,
        Black,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.buttonsContainer}
                onPress={() => navigation.goBack()}
                >
                    <Ionicons name="ios-chevron-back" size={24} color={colors.white} />
                </TouchableOpacity>
            </View>
    )
    }
}

export default PostDeetsHeader;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
        marginTop: Constant.statusBarHeight,
        backgroundColor: 'transparent',
        marginLeft: 16,
    },
    buttonsContainer: {
        backgroundColor: 'transparent',
        backgroundColor: 'rgba(0,0,0,.25)',
        height: 32,
        width: 32,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: colors.white,
        fontFamily: 'Black',
        fontSize: 16,
        marginHorizontal: 8,
    },
    searchIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        alignSelf: 'center',
        position: 'absolute',
        right: 0,
        marginRight: 16,
    }
});



{/* <Image source={require('../../../assets/images/logowhite.png')} style={{height: 26, width: 180, alignSelf: 'center'}} resizeMode='contain' /> */}