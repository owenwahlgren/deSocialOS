import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../assets/colors'

import { 
  useFonts,
  Poppins_400Regular as Regular,
  Poppins_500Medium as Medium,
  Poppins_600SemiBold as SemiBold,
  Poppins_700Bold as Bold,
  Poppins_800ExtraBold as ExtraBold,
  Poppins_900Black as Black,
} from '@expo-google-fonts/poppins'

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <View style={styles.background}>
            <Text style={{fontFamily: 'Bold', fontSize: 40, color: colors.dark}}>Home</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
      position: 'absolute',
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
  }
});
