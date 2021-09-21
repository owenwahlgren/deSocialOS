import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';


// const width = Dimensions.get("window").width / 3 ;
// const height = width * 1.618;

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

const LikedPost = (props) => {

    const navigation = useNavigation();

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
            <View style={{flex: 1, width: '100%', height: '100%'}}>
                {/* <TouchableOpacity
                onPress={()=>console.log(props)}
                > */}
                <Video 
                    source={{uri: post.videoUri}}
                    // isLooping
                    // shouldPlay
                    resizeMode={'cover'}
                    style={styles.video}
                />
                <View style={styles.uiContainer}>
                    <View style={styles.topContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="hearto" size={13.5} color="white" style={{marginTop: 1}} />
                        <Text style={styles.likes}>{post.likes}</Text>
                        </View>
                    </View>
                </View>
                {/* </TouchableOpacity> */}
            </View>
    )
    }
}

export default LikedPost;

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 0,
    },
    uiContainer: {
        height: '100%',
        width: '100%',
    },
    topContainer: {
        flex: 2,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 6, 
        paddingLeft: 6,
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        marginBottom: 4,
        marginLeft: 4,
    },
    infoContainer: {
        marginLeft: 4,
        marginBottom: 4,
    },
    title: {
        width: 174,
        fontSize: 14,
        color: colors.white,
        fontFamily: 'Medium',
        marginBottom: 4,
    },
    handle: {
        width: 140,
        fontSize: 14,
        fontFamily: 'Bold',
        color: colors.lightest,
    },
    profilePictue: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.white
    },
    likes: {
        color: colors.white,
        paddingLeft: 4,
        fontFamily: 'Medium',
        fontSize: 13.5,
    }
  });