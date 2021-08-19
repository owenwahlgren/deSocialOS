import React from 'react'
import { View, Text, StyleSheet, SafeAreaView} from 'react-native'
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
  } from '@expo-google-fonts/poppins';


export default function HeaderBar() {
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
            <SafeAreaView style={{backgroundColor: 'black'}}>
            <View style={styles.container}>
                <View style={{flex: 3}}>
                    <Text>1</Text>
                </View>
                <View style={{flex: 3, alignItems: 'center'}}>
                    <Text>2</Text>
                </View>
                <View style={{flex: 3, alignItems: 'flex-end'}}>
                    <Text>3</Text>
                </View>
            </View>
            </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        marginRight: 16,
        marginLeft: 16,
    },
})
