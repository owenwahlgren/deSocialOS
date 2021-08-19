import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height

export default function StartScreen() {
    return (
        <View style={styles.container}>
            <Video 
                source={require('../assets/videos/disk.mp4')}
                style={styles.video}
                resizeMode={'cover'}
                shouldPlay
                // isLooping
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        height,
        width,
        position: 'absolute',
        borderRadius: 2,
        flex: 1,
    },
  });
