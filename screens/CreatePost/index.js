import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView, Dimensions, Keyboard} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../assets/colors'
import { Video, AVPlaybackStatus } from 'expo-av';
import CreatePostHeader from '../../components/Camera/CreatePostHeader'
import { AntDesign } from '@expo/vector-icons'; 

const width = Dimensions.get("window").width / 1.618;
const height = width * 1.618;


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


export default function CreatePost(props) {
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
        <SafeAreaView style={styles.container}>
        <CreatePostHeader />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
            <View style={styles.headerContainer}>
            <Text style={styles.header}>Title:</Text>
            <TextInput 
                placeholder="Title your video"
                maxLength={20}
                style={styles.TextInput}
                keyboardType='default'
            />
            </View>
            <Video 
                style={styles.video}
                source={{uri: props.route.params.source}}
                resizeMode={'cover'}
                shouldPlay
                isLooping
            />
            <TouchableOpacity 
                style={styles.button2}
                // this onpress should mint and upload the video and then return the user back to their profile screen
                onPress={() => {}}
                >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.buttonText}>Post</Text>
                    <Text style={styles.buttonText2}>💫</Text>
                </View>
            </TouchableOpacity>
        </TouchableWithoutFeedback>
        </SafeAreaView>
    )
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    video: {
        height,
        width,
        alignSelf: 'center',
        borderRadius: 6,
        backgroundColor: colors.black,
        marginTop: 16,
    },
    TextInput: {
        borderBottomColor: colors.outline,
        color: colors.dark,
        borderBottomWidth: 1,
        alignSelf: 'center',
        marginTop: 8,
        fontSize: 16,
        fontFamily: 'Medium',
        paddingBottom: 4,
        width,
    },
    header: {
        fontFamily: 'Bold',
        fontSize: 14,
        color: colors.dark,
        width,

    },
    headerContainer: {
        width,
        alignSelf: 'center',
        marginTop: 16,
    },
    button2: {
        backgroundColor: colors.primary,
        width: 120,
        height: 42,
        borderRadius: 6,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 42,
      },
      buttonText: {
        fontFamily: 'Medium',
        color: colors.white,
        fontSize: 16,
      },
      buttonText2: {
        fontFamily: 'Medium',
        color: colors.white,
        fontSize: 16,
        marginLeft: 6,
        marginBottom: 3,
      },
  });
  