import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 


const width = Dimensions.get("window").width / 2 - 4;
const height = width * 2;

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

const Post = (props) => {
    const {post} = props;

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
            <TouchableOpacity>
            <Video 
                source={{uri: post.videoUri}}
                // isLooping
                // shouldPlay
                resizeMode={'cover'}
                style={styles.video}
            />
            <View style={styles.uiContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.likes}>{post.likes}</Text>
                    <AntDesign name="heart" size={16} color="white" style={{marginTop: 1}} />
                </View>
                <View style={{flexDirection: 'row', marginLeft: 4, alignItems: 'center'}}>
                    <Image 
                        style={styles.profilePictue} 
                        source={{uri: post.user.imageUri}} 
                    />
                    <View style={styles.bottomContainer}>
                        <Text style={styles.title}>{post.title}</Text>
                        <Text style={styles.handle}>@{post.user.username}</Text>
                    </View> 
                </View>
            </View>
            </TouchableOpacity>
    )
    }
}

export default Post;

const styles = StyleSheet.create({
    video: {
        width,
        height,
        position: 'absolute',
    },
    uiContainer: {
        height,
        width,
    },
    topContainer: {
        flex: 2,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 4,
        marginRight: 4,
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        marginBottom: 4,
        marginLeft: 4,
    },
    title: {
        fontSize: 15,
        color: colors.white,
        fontFamily: 'SemiBold'
    },
    handle: {
        fontSize: 14,
        fontFamily: 'Regular',
        color: colors.lightest,
    },
    profilePictue: {
        width: 36,
        height: 36,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.white
    },
    likes: {
        color: colors.white,
        marginRight: 6,
        fontFamily: 'SemiBold',
    }
  });