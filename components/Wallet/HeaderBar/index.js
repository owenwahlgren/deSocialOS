import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight, Modal, TouchableWithoutFeedback, Image, useWindowDimensions, TouchableOpacity} from 'react-native'
import colors from '../../../assets/colors'
import {useNavigation} from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';

import AppLoading from 'expo-app-loading';

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins';

import { color } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { useAccountInfo, useWallet } from '../../../state/hooks'


export default function HeaderBar() {
    const [copiedText, setCopiedText] = React.useState('');

    const navigation = useNavigation();

    const wallet = useWallet() 
    const info = useAccountInfo()
    const username = info[0] || wallet.address.toString().substring(0,12);
    const bio = info[1] || ""
    const ipfs = info[2] || ""
    const following = info[3] || 0 
    const followers = info[4] || 0
    const pfp = 'http://45.63.64.72:8080/ipfs/' + ipfs


    const copyToClipboard = () => {
        const fulladdress = wallet.address.toString();
        Clipboard.setString(fulladdress);
    };
    
    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    };

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
        <SafeAreaView style={{backgroundColor: colors.white}}>
            <View style={styles.container}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('AccountModal')}
                style={{flex: 1, alignItems: 'flex-start', position: 'absolute', left: 0}}
                >
                <Image
                    source={{
                        uri: pfp
                    }}
                    style={styles.profileImage}
                />
                </TouchableOpacity>
                <TouchableOpacity  
                onPress={copyToClipboard} 
                style={{
                  flexDirection: 'row',  
                  alignItems: 'center', 
                }}
                >
                <TouchableOpacity  
                  style={{
                    flexDirection: 'row', 
                    alignItems: 'center', 
                  }}
                  onPress={() => navigation.navigate('AccountModal')}
                  >
                    <Text style={styles.usernameText}>@{username || wallet.address.toString().substring(0,12)}</Text>
                    <Ionicons name="caret-down" size={18} color={colors.dark} />
                </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{flex: 1, alignItems: 'flex-end', position: 'absolute', right: 0}}
                onPress={() => navigation.navigate('ScanModal')}
                >
                    <Ionicons name="scan-sharp" size={24} color={colors.dark} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: colors.white,
        borderRadius: 0,
        height: 300,
        alignItems: 'center',
      },
      textStyle: {
        color: colors.dark,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      accountText: {
        color: colors.dark,
        fontFamily: 'SemiBold',
        fontSize: 15,
        marginTop: 12,
        marginBottom: 32,
      },
      modalSection: {
        width: '100%',
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
      },
      profileImage: {
        width: 32,
        height: 32,
        borderRadius: 50,
        resizeMode: 'cover',
      },
      nameContainer: {
        marginLeft: 16,
        height: 42,
        justifyContent: 'space-between',
      },
      addAccountContainer: {
        marginLeft: 16,
        height: 42,
        justifyContent: 'center',
      },
      usernameText: {
        fontFamily: 'SemiBold',
        color: colors.dark,
        fontSize: 15,
      },
      addressText: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 14,
      },
      addressContainer: {
        backgroundColor: colors.lightest,
        paddingVertical: 3,
        paddingHorizontal: 16,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.outline,
      },
})
