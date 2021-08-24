import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';


const width = Dimensions.get("window").width / 3 - 2;
const height = width * 1.618;

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

const CollectionPost = (props) => {

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
        <View style={{flex: 1, width: '100%', alignItems: 'flex-start', marginLeft: 1}}>
            <View style={styles.videoContainer}>
                <TouchableOpacity
                onPress={()=>console.log(props)}
                // onPress={() => navigation.navigate('PostDetails',{videoUri: props.videoUri, title: props.title})}
                >
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
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
    }
}

export default CollectionPost;

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 3,
    },
    videoContainer: {
        marginBottom: 2,
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
        marginRight: 6,
        fontFamily: 'SemiBold',
    }
  });