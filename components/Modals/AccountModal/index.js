import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Animated, Image } from 'react-native'
import colors from '../../../assets/colors'
import { useCardAnimation } from '@react-navigation/stack';
import { current } from '@reduxjs/toolkit';

export default function AccountModal({navigation}) {

    const { current } = useCardAnimation();

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            >
            <View style={styles.touchable} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
            <View style={styles.innerContainer}>
                <Text>AccountModal</Text>
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
        height: '50%', 
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
  