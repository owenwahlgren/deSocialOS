import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Animated, Image, SafeAreaView} from 'react-native'
import colors from '../../../assets/colors'
import { useCardAnimation } from '@react-navigation/stack';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import { useAccountInfo, useWallet } from '../../../state/hooks'
import { Value } from 'react-native-reanimated';
import QRCode from 'react-native-qrcode-svg';

const width = Dimensions.get("window").width / 1.2; 
const height = width * 1;
const qrSize = height * .9;
const modalheight = Dimensions.get("window").height / 1.4; 


export default function ProfilePicModal() {

  const navigation = useNavigation();
  const route = useRoute();

    return (
      <View style={styles.outside}>
        <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            >
            <View style={styles.touchable} />
            </TouchableWithoutFeedback>
        <SafeAreaView style={{backgroundColor: colors.white}}>
        <View style={styles.container}>
          <View style={styles.qr}>
              <QRCode
              //  value={a}
              color={colors.black}
              backgroundColor={colors.white}
              size={qrSize}
              logo={require('../../../assets/images/iconColor.png')} // or logo={{uri: base64logo}}
              logoMargin={16}
              logoSize={64}
              logoBorderRadius={100}
              logoBackgroundColor={colors.white}
              />
          </View>
          <View style={{flexDirection: 'row', width, marginTop: 20,}}>
            <Image 
            style={styles.image}
            source={{uri: 'https://i.insider.com/602ee9ced3ad27001837f2ac'}}  
            />
            <View style={{justifyContent: 'center', marginLeft: 16,}}>
              <Text style={styles.username}>
                @username
              </Text>
              <Text style={styles.address}>
                0x1234...12233
              </Text>
            </View>
          </View>
        </View>
        </SafeAreaView>
      </View>
    )
}

const styles = StyleSheet.create({
    outside: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    container: {
      alignItems: 'center',
      backgroundColor: colors.white,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,

      paddingBottom: 20,
      height: modalheight,
    },
    qr: {
      height,
      width,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      marginTop: 20,
    },
    image: {
      height: 80, 
      width: 80,
      borderRadius: 100,
    },
    touchable: {
      flex: 1,
    },
    username: {
      fontFamily: 'Medium',
      color: colors.dark,
      fontSize: 18,
      marginBottom: 6,
    },
    address: {
      fontFamily: 'Regular',
      fontSize: 15,
      color: colors.gray,
    },

  });
  