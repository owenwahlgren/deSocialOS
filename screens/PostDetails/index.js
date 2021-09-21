import React, {useState, useEffect} from 'react';
import "@ethersproject/shims";
import { ethers } from "ethers";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, StatusBar, SafeAreaView} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../assets/colors'
import AppLoading from 'expo-app-loading';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
import { useWallet } from '../../state/hooks';
import { NFT_Address, NFT_ABI, provider } from '../../utils/contract'
import { SharedElement } from 'react-navigation-shared-element';


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

  const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

const PostDetails = ({route, navigation}) => {

    const {item} = route.params

    const [comment, setComment] = useState("");
    const [color, setColor] = useState("white")
    const wallet = useWallet()
    const signer = wallet.connect(provider)
    const NFT = new ethers.Contract(NFT_Address, NFT_ABI, signer)
    const comments = route.params.item.comments
  
    useEffect(() => {
      (async () => {
          const likeStatus = await NFT.userLiked(item.id, wallet.address)
          if (likeStatus == true) {
              setColor('red')
          }
      })()
  })

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
        <StatusBar hidden />
        <View
          style={styles.header}>
          <View style={styles.container2}>
              <Video 
                  source={{uri: item.videoUri}}
                  resizeMode={'cover'}
                  isLooping
                  shouldPlay
                  style={styles.video2}
              />
              <SafeAreaView style={styles.uiContainer}>
                      <View style={styles.infoContainer}>
                        <View style={{justifyContent: 'flex-end'}}>
                          <Text style={styles.title}>{item.title}</Text>
                          <TouchableOpacity 
                          onPress={() => navigation.navigate('ProfileOtherUser')}
                          style={{flexDirection: 'row', alignItems: 'center'}}
                          >
                              <Image 
                                  style={styles.profilePictue} 
                                  source={{uri: item.user.imageUri}} 
                              />
                              <View style={styles.bottomContainer}>
                                  <Text ellipsizeMode='tail' style={styles.handle}>@{item.user.username}</Text>
                              </View> 
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.rightContainer}>
                          <Text style={styles.likes}>{item.likes}</Text>
                          <AntDesign name="heart" size={24} color={color} onPress={async () => {
                              setColor('blue')
                              const tx = await NFT.like(item.id)
                              console.log('post liked!\t waiting tx...')
                              await tx.wait()
                              console.log('tx mined')
                              if (color == 'red') {
                                setColor('white')
                              }
                              else {
                                setColor('red')
                              }
                          }}/>
                        </TouchableOpacity>
                      </View>
                  </SafeAreaView>
          </View>
        </View>
        </>
    )
    }
}

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    height,
    width: '100%',
    position: 'absolute',
  },
  label: {
    fontSize: 14, 
    color: colors.dark, 
    fontFamily: 'Medium',
  },
  indicator: {
    backgroundColor: colors.dark
  },
  emptyCreated: {
    height: 50,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Medium',
    fontSize: 15,
    color: colors.dark
  },
  emptyText2: {
    fontFamily: 'Regular',
    fontSize: 13.5,
    color: colors.dark,
    marginTop: 4,
  },
  downLottieCreated: {
    height: 40,
    marginBottom: 4,
    alignSelf: 'center',
  }, 
  downLottieCreated2: {
    height: 40,
    marginBottom: 4,
    marginLeft: 6,
  },
  container2: {
    flex: 1,
    backgroundColor: colors.white,
  },
  video2: {
      width,
      height,
      backgroundColor: colors.black,
      position: 'absolute',
  },
  bottomBar: {
    backgroundColor: colors.white,
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    height: 80,
  },
  profilePic: {
    width: 38,
    height: 38,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  TextInput: {
    flex: 1, 
    height: 38, 
    borderWidth: 1,
    borderColor: colors.outline,
    marginLeft: 8,
    marginRight: 4,
    borderRadius: 4,
    backgroundColor: colors.lightest,
    paddingLeft: 8,
  },
  uiContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
  rightContainer: {
      alignSelf: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
  },
  bottomContainer: {
      justifyContent: 'flex-end',
      marginLeft: 4,
  },
  infoContainer: {
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'space-between',
      paddingBottom: 8,
  },
  title: {
      width: '100%',
      fontSize: 14,
      color: colors.white,
      fontFamily: 'Medium',
      marginBottom: 4,
  },
  handle: {
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
      fontSize: 16,
  }
});