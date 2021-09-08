import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Animated, Image } from 'react-native'
import colors from '../../../assets/colors'
import { useCardAnimation } from '@react-navigation/stack';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

const width = Dimensions.get("window").width / 1.2; 
const height = width * 1;

export default function ProfilePicModal({navigation}) {

    scale = new Animated.Value(1)

    onZoomEvent = Animated.event(
        [
            {
            nativeEvent: { scale: this.scale }
            }
        ],
        {
            useNativeDriver: true
        }
    )

    onZoomStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
          Animated.spring(this.scale, {
            toValue: 1,
            useNativeDriver: true
          }).start()
        }
      }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            >
            <View style={styles.touchable} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
            <PinchGestureHandler
            onGestureEvent={this.onZoomEvent}
            onHandlerStateChange={this.onZoomStateChange}
            >
            <Animated.Image 
            style={{
                height: height,
                width: width,
                borderRadius: 500,
                position: 'absolute',
                transform:  [{ scale: this.scale }]
            }}
            source={{uri: 'https://i.insider.com/602ee9ced3ad27001837f2ac'}} 
            />
            </PinchGestureHandler>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchable: {
        backgroundColor: 'rgba(0,0,0,.9)',
        flex: 1,
        height: '100%',
        width: '100%',
    }
  });
  