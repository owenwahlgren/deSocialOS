/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef, useReducer} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  Animated,
  PanResponder,
} from 'react-native';
import {Camera} from 'expo-camera';
import { Video, AVPlaybackStatus } from 'expo-av';
import {useNavigation} from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

import { Entypo, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import { timing } from 'react-native-reanimated';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.back);
  const [recording, setRecording] = useState(false);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoPath, setVideoPath] = useState(null);
  const [isOpen, setIsopen] = useState(false);
  const [flashMode, setFlashMode] = useState('off');
  const [fileName, setFileName] = useState(null);
  const navigation = useNavigation();



  const position = new Animated.ValueXY({x:0,y:0})

  // Animated.timing(position,{
  //   toValue:{x:100, y:-100},
  //   useNativeDriver: true,
  //   duration: 2000
  // }).start()

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder:()=>true,
    onPanResponderGrant: () => {
      console.log('grant start')
      recordVideo();
    },
    onPanResponderMove:(e,gesture)=>{
      position.setValue({x: gesture.dx, y: gesture.dy})
      // console.log(gesture.dy)
      value = Math.abs(gesture.dy / 700) 
      console.log(value)
    },

    onPanResponderRelease:()=>{
      console.log('End')
      recordVideo();
      Animated.spring(position,{
        toValue:{x:0, y: 0},
        useNativeDriver: true,
        friction: 6,
      }).start()
    },
  })


  const zoomValue=0;

  const rotate = position.y.interpolate({
    inputRange: [0, 200],
    outputRange: ['0deg', '360deg']
  })

  const changeFlashMode = () => {
    if (flashMode == 'off') {
      setFlashMode('torch');
    } else {
      setFlashMode('off');
    }
  };

  const changeCameraType = () => {
    if (typeCamera == 'front') {
      setTypeCamera('back');
    } else if (typeCamera == 'back') {
      setTypeCamera('front');
    } else {
      setTypeCamera('front');
    }
  };

  useEffect(() => {
    (async () => {
      const videoStatus = await Camera.requestPermissionsAsync();
      setHasPermission(videoStatus.status === 'granted');
      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');

    })();
  }, []);
  if (hasPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const recordVideo = async () => {
    const options = {maxDuration: 8, quality: Camera.Constants.VideoQuality['720']}
    if (!recording) {
      setRecording(true);
      let video = await cameraRef.recordAsync(options).then(data => { 
        const filename = Date.now().toString();
          // setVideoPreview(data.uri);
          console.log(data);
          const source = data.uri
          navigation.navigate('VideoPreview', {source});  
          // setIsopen(true); 
      });
    } else {
      setRecording(false);
      cameraRef.stopRecording();
    }
  };

  const closeVideoPreview = () => {
    setVideoPreview(null);
    setIsopen(false);
  };

  function nav() {
    navigation.navigate('CreatePost', {
      videoUri: videoPath,
      fileName: fileName,
    });
  }
  function close() {
    closeVideoPreview();
  }

  if (videoPreview) {
    return (
      <Modal animationType="fade" visible={isOpen}>
        <Video
          source={{uri: videoPreview}}
          style={{flex: 1, alignSelf: 'stretch', backgroundColor: 'black'}}
          resizeMode={'cover'}
          repeat={true}
          isLooping
          shouldPlay
        />
        <View style={styles.actionBottom}>
          <Entypo
            name="check"
            size={40}
            color="lightgreen"
            style={styles.checkBtn}
            onPress={() => {
              nav();
              close();
            }}
          />
        </View>
        <View style={styles.closeBtn}>
          <AntDesign
            name="close"
            color="rgba(255,255,255,0.75)"
            size={40}
            onPress={closeVideoPreview}
          />
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Camera
        zoom={zoomValue}
        style={{flex: 1}}
        type={typeCamera}
        flashMode={flashMode}
        ref={ref => {
          setCameraRef(ref);
        }}>
        <View style={styles.sideItem}>
          <MaterialCommunityIcons
            style={styles.sideIcons}
            name="rotate-3d-variant"
            color="rgba(255,255,255,.75)"
            size={28}
            onPress={changeCameraType}
          />
          <Ionicons
            style={styles.sideIcons}
            name="flash"
            color="rgba(255,255,255,0.75)"
            size={28}
            onPress={changeFlashMode}
          />
        </View>
        <SafeAreaView style={{flex: 1, marginBottom: 72}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Animated.View
          {...pan.panHandlers}
              style={{
              transform:[
                {translateX: position.x},
                {translateY:position.y},
                {rotate:rotate}
              ]
            }}>
            <View
              style={{
                borderWidth: 5,
                borderRadius: 20,
                borderColor: recording
                  ? 'rgba(255,0,0,0.75)'
                  : 'rgba(255,255,255,0.6)',
                backgroundColor: recording
                  ? 'rgba(255,0,0,0.2)'
                  : 'transparent',
                height: 70,
                width: 70,
              }}
            />
          </Animated.View>
          </View>
        </SafeAreaView>
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  notAllowed: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBottom: {
    position: 'absolute',
    bottom: 20,
    paddingRight: 52,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  closeBtn: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 46,
    paddingLeft: 60,
  },
  checkBtn: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 30,
    paddingRight: 60,
  },
  sideItem: {
    alignSelf: 'flex-end',
    marginTop: 16,
    flex: 1,
  },
  sideIcons: {
    marginBottom: 40,
    marginRight: 16,
  },
  btn: {
    padding: 16,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  header: {
    position: 'absolute',
    marginTop: 16,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
});
