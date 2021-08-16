import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import colors from '../../../assets/colors'
import {Camera} from 'expo-camera'
import {Audio} from 'expo-av'
import { useIsFocused } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

export default function Record() {
    const [hasCameraPermissions, setHasCameraPermissions] = useState(false)
    const [hasAudioPermissions, setHasAudioPermissions] = useState(false)

    const [cameraRef, setCameraRef] = useState(null)
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
    const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off)

    const [isCameraReady, setIsCameraReady] = useState(false)
    const isFocused = useIsFocused()

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestPermissionsAsync()
            setHasCameraPermissions(cameraStatus.status == 'granted')

            const audioStatus = await Audio.requestPermissionsAsync()
            setHasAudioPermissions(audioStatus.status == 'granted')
        })()
    }, [])

    const recordVideo = async () => {
        if (cameraRef) {
            try {
                const options = {maxDuration: 8, quality: Camera.Constants.VideoQuality[720]}
                const videoRecordPromise = cameraRef.recordAsync(options)
                if(videoRecordPromise){
                    const data = await videoRecordPromise;
                    const source = data.uri
                }

            } catch (error) {
                console.warn(error)
            }
        }
    }

    const stopVideo = async () => {
        if (cameraRef) {
            cameraRef.stopRecording()
        }
    }

    if (!hasCameraPermissions || !hasAudioPermissions){
        return (
            <View />
        )
    }


    return (
        <View style={styles.container}>
            {isFocused ?
                <Camera 
                ref={ref => setCameraRef(ref)}
                style={styles.camera}
                ratio={'16:9'}
                type={cameraType}
                flashMode={cameraFlash}
                onCameraReady={() => setIsCameraReady(true)}
                />
            : null}

            <View style={styles.sideBarContainer}>
                <TouchableOpacity style={styles.sideBarButton}
                onPress={() => setCameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front: Camera.Constants.Type.back)} >
                    <Feather name="refresh-ccw" size={24} color={'white'} />
                    <Text style={styles.iconText}>Flip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sideBarButton}
                onPress={() => setCameraFlash(cameraFlash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch: Camera.Constants.FlashMode.off)} >
                    <Feather name="zap" size={24} color={'white'} />
                    <Text style={styles.iconText}>Flash</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomBarContainer}>
                <View style={styles.recordButtonContainer}>
                    <TouchableOpacity 
                        style={styles.recordButton}
                        disabled={!isCameraReady}
                        onLongPress={recordVideo}
                        onPressOut={() => stopVideo()}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
        flex: 1,
        backgroundColor: colors.black,
        aspectRatio: 9/16,
    },
    bottomBarContainer: {
        position: 'absolute',
        bottom: 80,
        flexDirection: 'row',
        marginBottom: 30
    },
    recordButtonContainer: {
        flex: 1,
        marginHorizontal: 30
    },
    recordButton: {
        borderWidth: 8,
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
        borderRadius: 100,
        height: 80,
        width: 80,
        alignSelf: 'center',
    },
    sideBarContainer: {
        top: 60,
        right: 0,
        marginHorizontal: 20,
        position: 'absolute'
    },
    iconText: {
        color: 'white',
        fontSize: 11,
        marginTop: 4,
    },
    sideBarButton: {
        alignItems: 'center',
        marginBottom: 25
    }
  });