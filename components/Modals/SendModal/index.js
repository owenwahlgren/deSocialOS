import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Animated, Image } from 'react-native'
import colors from '../../../assets/colors'
import { useCardAnimation } from '@react-navigation/stack';
import { current } from '@reduxjs/toolkit';
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import tokenIcons from '../../../assets/tokenIcons';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-navigation';


export default function SendModal() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            >
            <View style={styles.touchable} />
            </TouchableWithoutFeedback>
            <View style={styles.innerContainer}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.closeButton}
                >
                    <Ionicons name="close" size={22} color={colors.gray} />
                </TouchableOpacity>
                <Text style={styles.topText}>Send</Text>
                <View style={styles.length}>
                    <View style={{position: 'absolute', alignSelf: 'center', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Medium', color: colors.gray, fontSize: 16}}>
                            to:
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Image 
                            style={styles.image}
                            source={{uri: tokenIcons.usdt}}
                        />
                        <Text style={styles.sectionHeader}>$12345</Text>
                        <Text style={styles.tokenText}>12345 USDT</Text>
                    </View>
                    <View style={styles.section}>
                        <Image 
                            style={styles.image}
                            source={{uri: 'https://i.pinimg.com/474x/72/c4/3c/72c43c0e10161d3f741681380cfa2986.jpg'}}
                        />
                        <Text style={styles.sectionHeader}>@user, ens,</Text>
                        <Text style={styles.tokenText}>0xab...1234</Text>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end', width: '100%', alignItems: 'center'}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Tap to Send
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    innerContainer: {
        height: '42%', 
        width: '100%', 
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'rgba(255,255,255,1)',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    touchable: {
        flex: 1,
    },
    topText: {
        fontFamily: 'Medium',
        marginTop: 10,
        color: colors.dark,
        fontSize: 16,
    },
    closeButton: {
        position: 'absolute',
        left: 0,
        marginTop: 10,
        marginLeft: 20,
    },
    section: {
        marginTop: 26,
        flex: 2,
        alignItems: 'center',
    },
    sectionHeader: {
        fontFamily: 'SemiBold',
        fontSize: 16,
        color: colors.dark,
        marginTop: 8,

    },
    tokenText: {
        fontFamily: 'Medium',
        color: colors.gray  ,
        fontSize: 13.5,
        marginTop: 2,
    },
    length: {
        flexDirection: 'row',
        width: '100%',
    },
    image: {
        width: 58,
        height: 58,
        borderRadius: 100,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 2,
        marginTop: 64,
        width: '80%',
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        marginBottom: 52,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 9,
    },
    buttonText: {
        fontFamily: 'Medium',
        color: colors.white,
        fontSize: 16,
    }
  });
  