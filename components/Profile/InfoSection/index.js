import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../../assets/colors'
import {useFeedData} from '../../../state/hooks'
import {useNavigation} from '@react-navigation/native';
import { useAccountInfo, useWallet } from '../../../state/hooks'
import { SOCIAL } from '../../../utils/contract'

import { 
  useFonts,
  Poppins_400Regular as Regular,
  Poppins_500Medium as Medium,
  Poppins_600SemiBold as SemiBold,
  Poppins_700Bold as Bold,
  Poppins_800ExtraBold as ExtraBold,
  Poppins_900Black as Black,
} from '@expo-google-fonts/poppins'

export default function InfoSection(props) {
  const wallet = useWallet()
  const info = useAccountInfo()
  const username = info[0] || wallet.address.toString().substring(0,12);
  const bio = info[1] || ""
  const ipfs = info[2] || ""
  const following = info[3] || 0 
  const followers = info[4] || 0
  const pfp = 'http://45.63.64.72:8080/ipfs/' + ipfs

  const navigation = useNavigation();

  const {item} = props;


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
          <TouchableOpacity style={{backgroundColor: colors.lightest, borderWidth: 1, borderColor: colors.outline, paddingHorizontal: 14, paddingVertical: 2, borderRadius: 50, marginBottom: 16}}>
              <Text style={{fontFamily: 'Regular', fontSize: 11.5, color: colors.gray}}
              >
              0xajk4...2098
              </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View style={{paddingRight: 32}}>
              <TouchableOpacity 
              onPress={() => navigation.navigate('FollowingFollowers')}
              style={{alignItems: 'center'}}
              >
                <Text style={styles.numbers}>{followers}</Text>
                <Text style={styles.numberLabels}>Followers</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('ProfilePicModal', {item})}
            >
            <Image
              source={{
                uri: pfp
              }}
              style={styles.profileImage}
            />
            </TouchableOpacity>
            <View style={{paddingLeft: 32}}>
              <TouchableOpacity 
              onPress={() => navigation.navigate('FollowingFollowers')}
              style={{alignItems: 'center'}}
              >
                <Text style={styles.numbers}>{following}</Text>
                <Text style={styles.numberLabels}>Following</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('EditProfile')}
          >
              <Text style={{fontFamily: 'Regular', fontSize: 15, color: colors.dark}}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={{marginTop: 0, marginHorizontal: 60}}>
              <Text style={styles.bio}>{bio}</Text>
          </View>
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
    paddingBottom: 32,
  },
  numbers: {
    fontFamily: 'Bold',
    fontSize: 18,
    color: colors.dark
  },
  numberLabels: {
    fontFamily: 'Regular',
    fontSize: 13,
    color: colors.gray
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    backgroundColor: colors.outline,
  },
  username: {
    fontFamily: 'SemiBold',
    fontSize: 16,
    color: colors.dark
  },
  bio: {
    fontFamily: 'Regular',
    fontSize: 13,
    color: colors.dark,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.outline,
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 8,
    width: 160,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
