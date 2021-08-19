import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function Preview({route, navigation}) {

    const {videoPreview} = route.params;

  return (
      <View>
          <Video 
              source={{uri: videoPreview}}
              style={{flex: 1}}
              resizeMode={'cover'}
          />
      </View>
  );
}

{/* <Modal animationType="fade" visible={isOpen}> */}
  //       <Video
  //         source={{uri: videoPreview}}
  //         style={{flex: 1, alignSelf: 'stretch', backgroundColor: 'black'}}
  //         resizeMode={'cover'}
  //         repeat={true}
  //         isLooping
  //         shouldPlay
  //       />
  //       <View style={styles.actionBottom}>
  //         <Entypo
  //           name="check"
  //           size={40}
  //           color="lightgreen"
  //           style={styles.checkBtn}
  //           onPress={() => {
  //             nav();
  //             close();
  //           }}
  //         />
  //       </View>
  //       <View style={styles.closeBtn}>
  //         <AntDesign
  //           name="close"
  //           color="rgba(255,255,255,0.75)"
  //           size={40}
  //           onPress={closeVideoPreview}
  //         />
  //       </View>
  //     </Modal>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
