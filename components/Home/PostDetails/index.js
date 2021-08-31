import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import HeaderBar from '../../Profile/HeaderBar';

import PostCollapsibleTabView from '../../Home/PostCollapsibleTabView';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height ;

const PostDetails = ({route, navigation}) => {
 
    const {post} = route.params     
 
    return (
        // <>
            <View style={styles.videoContainer}>
                <Video 
                    source={{uri: post.videoUri}}
                    resizeMode={'cover'}
                    isLooping
                    shouldPlay
                    style={styles.video}
                />
            </View>
        /* <View style={{position: 'absolute', flex: 1, width: '100%', zIndex: 100}}>
        <HeaderBar />
        </View> */
        // <PostCollapsibleTabView />
        /* </> */

        // {/* 
        //     <>
        //     <View style={{position: 'absolute', flex: 1, width: '100%', zIndex: 100}}>
        //     <HeaderBar />
        //     </View>
        //     <CollapsibleTabView />
        //     </> 
        // */}
    )
}

export default PostDetails; 


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute',  
    },
    videoContainer: {
        width,
        height,
    },
    titleText: {
        fontSize: 20,
        marginLeft: 16,
        marginTop: 16,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 50,
        resizeMode: 'cover',
      },
});