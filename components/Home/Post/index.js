import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';


const width = Dimensions.get("window").width / 2 - 2;
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
            <View style={styles.videoContainer}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('PostDetails')}
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
                    <View style={styles.infoContainer}>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.title}>{post.title}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image 
                                style={styles.profilePictue} 
                                source={{uri: post.user.imageUri}} 
                            />
                            <View style={styles.bottomContainer}>
                                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.handle}>@{post.user.username}</Text>
                            </View> 
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
    )
    }
}

export default Post;

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 2,
    },
    videoContainer: {
        width,
        height,
        marginHorizontal: 1,
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