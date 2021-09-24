import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight, Modal, TouchableWithoutFeedback, Image, useWindowDimensions, TouchableOpacity} from 'react-native'
import colors from '../../../assets/colors'
import {useNavigation} from '@react-navigation/native';

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


export default function SendAmountHeader() {

  const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

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
                style={{flex: 1, marginLeft: 16}}
                onPress={() => navigation.goBack()}
                >
                    <Ionicons name="ios-chevron-back-sharp" size={24} color={colors.dark} />
                </TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', alignSelf: 'center'}}>
                        <Text style={styles.adressText}>Send</Text>
                </View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    adressText: {
        color: colors.dark,
        fontFamily: 'SemiBold',
        fontSize: 16,
    },
})
