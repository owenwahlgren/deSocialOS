import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import colors from '../../../assets/colors'
import {Camera} from 'expo-camera'
import {Audio} from 'expo-av'
import { Feather } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

const Record = () => {
    const [isRecording, setisRecording] = useState(true)
    const camera = useRef();

    const onRecord = async () => {
        if(isRecording) {
            camera.current.stopRecording();
            setisRecording(false);
        } else {
            setisRecording(true);
            const data = await camera.current.recordAsync();
            console.log(data);
        }

    };

    return (
        <View style={styles.container}>
            <Camera 
            ref={camera}
            style={styles.camera}    
            />
            <TouchableOpacity 
            onPress={onRecord} 
            style={isRecording ? styles.buttonStop : styles.buttonRecord}
            />
        </View>
    )
}

export default Record

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonRecord: {
        height: 60,
        width: 60,
        bottom: 0,
        borderWidth: 6,
        borderColor: 'rgba(255,0,0,.75)',
        borderRadius: 50,
        marginBottom: 24,
        alignSelf: 'center',
        position: 'absolute',
    },
    buttonStop: {
        height: 60,
        width: 60,
        bottom: 0,
        borderWidth: 6,
        borderColor: 'rgba(255,255,255,.75)',
        borderRadius: 50,
        marginBottom: 24,
        alignSelf: 'center',
        position: 'absolute',
    },
});