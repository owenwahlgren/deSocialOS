import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 2;

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

const PostBigVideo = () => {
    
    let [fontsLoaded] = useFonts({
        Bold,
        Regular,
        SemiBold
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        // <View style={styles.container}>
        //     <View style={styles.videoContainer}>
        //         <Video 
        //             source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
        //             resizeMode={'cover'}
        //             isLooping
        //             shouldPlay
        //             style={styles.video}
        //             volume={0} //1 is max, just muted to listen to music while coding 
        //         />
        //     </View>
        //     </View>
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
                uri: 'https://reactnative.dev/img/tiny_logo.png'
              }}
              style={styles.profileImage}
            />
            <View style={{alignItems: 'center', paddingLeft: 32}}>
              <Text style={styles.numbers}>123</Text>
              <Text style={styles.numberLabels}>Following</Text>
            </View>
          </View>
          <View style={{marginTop: 16}}>
              <Text style={styles.username}>@username</Text>
          </View>
          <View style={{marginTop: 8, marginHorizontal: 60}}>
              <Text style={styles.bio}>bio</Text>
          </View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('EditProfile')}
          >
              <Text style={{fontFamily: 'Regular', fontSize: 15, color: colors.dark}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
    )
    }
}

export default PostBigVideo; 


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
      borderWidth: 1,
      borderRadius: 6,
      borderColor: colors.outline,
      marginTop: 24,
      marginBottom: 24,
      paddingVertical: 8,
      width: 180,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  