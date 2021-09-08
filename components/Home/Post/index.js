import React, { useState, useEffect } from 'react';
import "@ethersproject/shims";
import { ethers } from "ethers";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { useWallet } from '../../../state/hooks'
import { NFT_Address, NFT_ABI, provider } from '../../../utils/contract';
const width = Dimensions.get("window").width /2 - 2; 
const height = width * 1.8;

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
    const wallet = useWallet()
    const signer = wallet.connect(provider)
    const NFT = new ethers.Contract(NFT_Address, NFT_ABI, signer)
    const [color, setColor] = useState('white')
    const [likes, setLikes] = useState(props.post.likes)
    useEffect(() => {
        (async () => {
            const likeStatus = await NFT.userLiked(props.post.id, wallet.address)
            if (likeStatus == true) {
                setColor('red')
            }
        })()
    })

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
                {/* <TouchableOpacity
                onPress={()=>navigation.push('PostDeets', {post})}  
                // onPressIn={()=>console.log(post.id)}
                > */}
                <Image 
                    source={require('../../../assets/images/loadingLogo.png')}
                    resizeMode='cover'
                    style={styles.image}
                />
                
 
                <Video 
                    source={{uri: post.videoUri}}
                    // isLooping
                    // shouldPlay 
                    resizeMode={'cover'}
                    style={styles.video}
                    volume={0}
                />
                
                <View style={styles.uiContainer}>
                    <View style={styles.topContainer}>
                        <Text style={styles.likes}>{likes}</Text>
                        <AntDesign name="heart" size={16} color={color} style={{marginTop: 1}} onPress={async () => {
                            setColor('blue')
                            const tx = await NFT.like(props.post.id)
                            console.log('post liked!\t waiting tx...')
                            await tx.wait()
                            console.log('tx mined')
                            if (color == 'red') {
                                setColor('white')
                                setLikes(likes - 1)
                              }
                              else {
                                setColor('red')
                                setLikes(likes + 1)
                              }
                        }}/>


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
                {/* </TouchableOpacity> */}
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
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    videoContainer: {
        width,
        height,
        marginHorizontal: 1,
        marginBottom: 2,
        backgroundColor: colors.black,
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