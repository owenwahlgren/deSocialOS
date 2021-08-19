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
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>
                        🔥Hot  
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>
                        ✨New    
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>
                        👀Following    
                        </Text>
                    </TouchableOpacity>
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
        height: 46,
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
    },
    buttonText: {
        color: colors.white,
        fontFamily: 'Black',
        fontSize: 16,
        marginLeft: 12,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
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