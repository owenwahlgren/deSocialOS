import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Touchable } from 'react-native'
import Constant from 'expo-constants'
import colors from '../../../assets/colors';
import AppLoading from 'expo-app-loading';
import { BlurView } from 'expo-blur';
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

const Header = () => {

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
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.4)', borderWidth: 1, borderColor: colors.dark, paddingHorizontal: 16, paddingVertical: 4, alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
                        <Text style={styles.buttonText2}>
                        New  
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.4)', borderWidth: 1, borderColor: colors.dark, paddingHorizontal: 16, paddingVertical: 4, alignItems: 'center', justifyContent: 'center', borderRadius: 50, marginLeft: 8}}>
                        <Text style={styles.buttonText}>
                        Trending    
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0.4)', borderWidth: 1, borderColor: colors.dark, paddingHorizontal: 16, paddingVertical: 4, alignItems: 'center', justifyContent: 'center', borderRadius: 50, marginLeft: 8}}>
                        <Text style={styles.buttonText}>
                        Following    
                        </Text>
                    </TouchableOpacity>
                    {/* <Image 
                        style={{height: 24, marginBottom: 4}}
                        source={require('../../../assets/images/logoBlack.png')}
                        resizeMode={'contain'}
                    /> */}
                </View>
                <TouchableOpacity 
                style={{flex: 1, justifyContent: 'center'}}
                onPress={() => navigation.navigate('SearchScreen')}
                >
                <Image 
                    style={styles.searchIcon}
                    source={require('../../../assets/images/SearchIcon.png')}
                />
                </TouchableOpacity>
            </View>
    )
    }
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 40,
        position: 'absolute',
        flexDirection: 'row',
        top: 0,
        left: 0,
        right: 0,
        marginTop: Constant.statusBarHeight,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%',
        justifyContent: 'flex-start',
        marginLeft: 16,
        flex: 1,
    },
    buttonText: {
        color: colors.white,
        fontFamily: 'Regular',
        fontSize: 14,
    },
    buttonText2: {
        color: colors.white,
        fontFamily: 'Bold',
        fontSize: 14,
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
