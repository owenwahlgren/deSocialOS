/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
} from 'react-native';
import {Camera} from 'expo-camera';
import { Video, AVPlaybackStatus } from 'expo-av';
import {useNavigation} from '@react-navigation/native';

import { Entypo, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.back);
  const [recording, setRecording] = useState(false);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoPath, setVideoPath] = useState(null);
  const [isOpen, setIsopen] = useState(false);
  const [flashMode, setFlashMode] = useState('off');
  const [fileName, setFileName] = useState(null);
  const navigation = useNavigation();

  const changeFlashMode = () => {
    if (flashMode == 'off') {
      setFlashMode('on');
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
      const {status} = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const recordVideo = async () => {
    const options = {maxDuration: 8, quality: Camera.Constants.VideoQuality['720']}
    if (!recording) {
      setRecording(true);
      let video = await cameraRef.recordAsync(options).then(data => {
        const filename = Date.now().toString();
          setVideoPreview(data.uri);
          console.log(data);
          setIsopen(true);
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
        style={{flex: 1}}
        type={typeCamera}
        flashMode={flashMode}
        ref={ref => {
          setCameraRef(ref);
        }}>
        <View style={styles.header}>
          <AntDesign
            name="close"
            color="rgba(255,255,255,0.75)"
            size={34}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
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
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: 32,
          }}
          onPressIn={recordVideo}
          onPressOut={recordVideo}>
          <View
            style={{
              borderWidth: 4,
              borderRadius: 100,
              borderColor: 'rgba(255,255,255,0.5)',
              height: 80,
              width: 80,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 4,
                borderRadius: 100,
                borderColor: recording
                  ? 'rgba(255,0,0,0.75)'
                  : 'rgba(255,255,255,0.5)',
                height: 80,
                width: 80,
              }}
            />
          </View>
        </TouchableOpacity>
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
    position: 'absolute',
    top: 12,
    right: 12,
  },
  sideIcons: {
    width: 44,
    height: 44,
    marginBottom: 24,
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
    top: 12,
    left: 12,
    justifyContent: 'space-between',
  },
});
