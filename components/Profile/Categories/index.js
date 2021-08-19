import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Categories() {
    let [fontsLoaded] = useFonts({
        Bold,
        Regular,
        SemiBold
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Text style={styles.headerActive}>Created</Text>
            </TouchableOpacity>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'red',
    },
    headerActive: {
        color: colors.lightest,
        fontFamily: 'SemiBold',
        fontSize: 16,
    },
    headerInactive: {
        color: colors.lightGray
    },
});