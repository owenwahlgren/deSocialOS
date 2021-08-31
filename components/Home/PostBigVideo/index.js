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

const PostBigVideo = ({route, navigation}) => {


    return (
        <View style={styles.container2}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Video 
                source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                resizeMode={'cover'}
                isLooping
                shouldPlay
                style={styles.video2}
                volume={0} //1 is max, just muted to listen to music while coding 
            />
          </View>
        </View>
    )
}

export default PostBigVideo; 


const styles = StyleSheet.create({
    container2: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    video2: {
        height: '100%',
        width,
        flex: 1,
    }
  });
  