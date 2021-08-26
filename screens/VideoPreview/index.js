import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import colors from '../../assets/colors'
import { Video, AVPlaybackStatus } from 'expo-av';
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


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

export default function VideoPreview(props) {

  const navigation = useNavigation();
  console.log(props.route.params.source)

  const source = props.route.params.source

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
    <SafeAreaView>
      <Video 
        source={{uri: props.route.params.source}}
        style={styles.video}
        resizeMode={'cover'}
        shouldPlay
        isLooping
      />
      <View style={styles.uiContainer}>
        <TouchableOpacity 
        style={styles.button1}
        onPress={() => navigation.navigate('HomeTabs')}
        >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="arrowleft" size={24} color={colors.white} style={{marginRight: 8}} />
          <Text style={styles.buttonText}>Retake</Text>
        </View>
        </TouchableOpacity>
      
        <TouchableOpacity 
        style={styles.button2}
        onPress={() => navigation.navigate('CreatePost', {source})}
        >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.buttonText}>Continue</Text>
          <AntDesign name="arrowright" size={24} color={colors.white} style={{marginLeft: 8,}} />
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  video: {
    width,
    height,
    position: 'absolute',
    backgroundColor: colors.black
  },
  closeButton: {
    marginLeft: 16,
    marginTop: 16,
    flex: 0,
    backgroundColor: 'red',
  },
  button1: {
    backgroundColor: colors.dark,
    width: 120,
    height: 42,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: colors.primary,
    width: 120,
    height: 42,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uiContainer: {
    height: '100%',
    paddingBottom: 20,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Medium',
    color: colors.white,
    fontSize: 14,
  }
});

