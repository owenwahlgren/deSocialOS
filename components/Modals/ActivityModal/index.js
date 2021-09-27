import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Animated, Image } from 'react-native'
import colors from '../../../assets/colors'
import { current } from '@reduxjs/toolkit';

export default function ActivityModal({navigation}) {


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            >
            <View style={styles.touchable} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
            <View style={styles.innerContainer}>
                <Text>Recieved/Sent on:</Text>
                <Text>(date)</Text>
                <Text>View on etherscan link</Text>
            </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    innerContainer: {
        height: '30%', 
        width: '100%', 
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        flex: 1,
    }
  });
  