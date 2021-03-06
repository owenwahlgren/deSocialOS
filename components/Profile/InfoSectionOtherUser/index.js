import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../../assets/colors'
import {useFeedData} from '../../../state/hooks'
import {useNavigation} from '@react-navigation/native';
import { useAccountInfo, useWallet } from '../../../state/hooks'
import { SOCIAL } from '../../../utils/contract'
import * as Haptics from 'expo-haptics';

import { 
  useFonts,
  Poppins_400Regular as Regular,
  Poppins_500Medium as Medium,
  Poppins_600SemiBold as SemiBold,
  Poppins_700Bold as Bold,
  Poppins_800ExtraBold as ExtraBold,
  Poppins_900Black as Black,
} from '@expo-google-fonts/poppins'

export default function InfoSectionOtherUser() {
  const wallet = useWallet()
  const info = useAccountInfo()
  const username = info[0] || wallet.address.toString().substring(0,12);
  const bio = info[1] || ""
  const ipfs = info[2] || ""
  const following = info[3] || 0
  const followers = info[4] || 0
  const pfp = 'http://45.63.64.72:8080/ipfs/' + ipfs

  const navigation = useNavigation();

  const [pressed, SetPressed] = useState(false);

  const onPressHandler = () => {
    SetPressed(!pressed);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  }



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
              <Text style={styles.numbers}>1234</Text>
              <Text style={styles.numberLabels}>Followers</Text>
            </View>
            <Image
              source={{
                uri: pfp
              }}
              style={styles.profileImage}
            />
            <View style={{alignItems: 'center', paddingLeft: 32}}>
              <Text style={styles.numbers}>4321</Text>
              <Text style={styles.numberLabels}>Following</Text>
            </View>
          </View>
          <View style={{marginTop: 16}}>
              <Text style={styles.username}>@other user's username</Text>
          </View>
          <View style={{marginTop: 8, marginHorizontal: 60}}>
              <Text style={styles.bio}>other user's bio</Text>
          </View>
          <TouchableOpacity
          style={[{ 
            backgroundColor: pressed ? colors.white : colors.primary, 
            borderWidth: pressed ? 1 : 0, 
          }, styles.button ]} 
          onPress={onPressHandler}
          >
              <Text 
              style={[{ color: pressed ? colors.dark : colors.white }, styles.text ]}>
              {pressed ? 'Following' : 'Follow'}
              </Text>
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
    fontSize: 18,
    color: colors.dark
  },
  numberLabels: {
    fontFamily: 'Regular',
    fontSize: 13,
    color: colors.gray
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    resizeMode: 'cover',
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
    borderRadius: 6,
    marginTop: 24,
    marginBottom: 24,
    paddingVertical: 8,
    width: 180,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.outline,
  },
  text: {
    fontFamily: 'Regular',
    fontSize: 15,
  }
});
