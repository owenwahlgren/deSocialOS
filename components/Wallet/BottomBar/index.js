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


export default function BottomBar() {

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

            <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Recieve</Text>
                  </TouchableOpacity>
                </View>
            </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 72,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.outline,
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    button: {
      width: 160,
      height: 46,
      backgroundColor: colors.dark,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
      marginRight: 8, 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
  
      elevation: 5,
    },
    bigText: {
      fontFamily: 'Medium',
      fontSize: 32,
      color: colors.dark,
      marginBottom: 64,
    },
    buttonText: {
      fontFamily: 'Medium',
      color: colors.lightest,
      fontSize: 15,
    }
})
