import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors'
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get("window").width;
const height = width * 2;

const PostDetails = ({route}) => {
    const {videoUri, title} = route.params
    return (
        <ScrollView style={styles.container}>
            <View style={styles.videoContainer}>
                <Video 
                    // source={{uri: {videoUri}}} (not working??) 

                    //this should be the video that is clicked on not this plaeholder one
                    source={{uri: 'https://assets.mixkit.co/videos/preview/mixkit-small-pink-flowers-1186-large.mp4'}}
                    resizeMode={'cover'}
                    isLooping
                    shouldPlay
                    style={styles.video}
                />
            </View>
            <Text style={styles.titleText}>
                {title}
            </Text>
        </ScrollView>
    )
}

export default PostDetails; 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
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
    }
});