import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';


const width = Dimensions.get("window").width;
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

const Comment = (item) => {

    const navigation = useNavigation();
    console.log(item)

    const address = item.post.id
    const imageUri = item.post.imageUri
    const username = item.post.username
    const message = item.post.message


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
        <>
        <View style={styles.commentcontainer}>
            <View style={styles.innerLeftContainer}>
                <TouchableOpacity
                onPress={() => navigation.navigate('ProfileOtherUser')}
                >
                <Image 
                    style={styles.avatar}
                    source={{uri: imageUri}}
                />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileOtherUser')}
                    >
                    <Text style={styles.username}>@{username}</Text>
                    </TouchableOpacity>
                    <Text style={styles.commentText}>{message}</Text>
                    <TouchableOpacity style={styles.likeContainer}
                    >
                        <AntDesign name="hearto" size={14} color={colors.gray} />
                        <Text style={styles.numberText}>1234</Text>
                    </TouchableOpacity>
                </View>
            </View>     
        </View>
        </>
    )
    }
}

export default Comment;

const styles = StyleSheet.create({
    commentcontainer: {
        flex: 1,
        width: '100%',
        paddingLeft: 8,
        paddingTop: 8,
        paddingRight: 8,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.outline,
    },
    username: {
        fontFamily: 'SemiBold',
        color: colors.dark,
        fontSize: 14,
        marginBottom: 2,
    },
    commentText: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 14,
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 50,
        resizeMode: 'cover',
    },
    innerLeftContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        paddingBottom: 8,
    },
    numberText: {
        fontFamily: 'Regular',
        fontSize: 12.5,
        color: colors.gray,
        marginLeft: 4,
    },
    textContainer: {
        flex: 1,
        marginLeft: 8,
        justifyContent: 'center',
    }
  });