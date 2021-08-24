import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../../assets/colors'
import {useFeedData} from '../../../state/hooks'

import { 
  useFonts,
  Poppins_400Regular as Regular,
  Poppins_500Medium as Medium,
  Poppins_600SemiBold as SemiBold,
  Poppins_700Bold as Bold,
  Poppins_800ExtraBold as ExtraBold,
  Poppins_900Black as Black,
} from '@expo-google-fonts/poppins'

export default function InfoSection() {
  let [fontsLoaded] = useFonts({
    Bold,
    Regular,
    SemiBold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 32,
            }}>
            <View style={{alignItems: 'center', paddingRight: 32}}>
              <Text style={styles.numbers}>123</Text>
              <Text style={styles.numberLabels}>Followers</Text>
            </View>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={styles.profileImage}
            />
            <View style={{alignItems: 'center', paddingLeft: 32}}>
              <Text style={styles.numbers}>123</Text>
              <Text style={styles.numberLabels}>Following</Text>
            </View>
          </View>
          <View style={{marginTop: 16}}>
              <Text style={styles.username}>@Caleb</Text>
          </View>
          <View style={{marginTop: 8, marginHorizontal: 60}}>
              <Text style={styles.bio}>hello friends. welcome to my page this is my bio :)</Text>
          </View>
          <TouchableOpacity style={styles.button}>
              <Text style={{fontFamily: 'SemiBold', fontSize: 16, color: colors.dark}}>My Wallet</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbers: {
    fontFamily: 'Bold',
    fontSize: 20,
    color: colors.dark
  },
  numberLabels: {
    fontFamily: 'Regular',
    fontSize: 14,
    color: colors.gray
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  username: {
    fontFamily: 'Bold',
    fontSize: 16,
    color: colors.dark
  },
  bio: {
    fontFamily: 'Regular',
    fontSize: 14,
    color: colors.dark,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.outline,
    marginTop: 24,
    marginBottom: 24,
    paddingVertical: 8,
    width: 240,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
