import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Animated, Image, ScrollView, FlatList, SafeAreaView, TouchableHighlight } from 'react-native'
import colors from '../../../assets/colors'
import { useCardAnimation } from '@react-navigation/stack';
import { current } from '@reduxjs/toolkit';
import {useNavigation, useRoute} from '@react-navigation/native';
import { useAccountInfo, useWallet } from '../../../state/hooks'
import { SOCIAL } from '../../../utils/contract'
import { Ionicons } from '@expo/vector-icons'; 



    const DUMMYDATA = [
    {
    id: '1',
    title: '@wallet1',
    address: '0x123...123'
    },
    {
    id: '2',
    title: '@wallet2',
    address: '0x123...123'
    },
    {
    id: '3',
    title: '@wallet3',
    address: '0x123...123'
    },
    {
    id: '4',
    title: '@wallet3',
    address: '0x123...123'
    },
    ];

export default function AccountModal() {
    const wallet = useWallet() 
    const info = useAccountInfo()
    const username = info[0] || wallet.address.toString().substring(0,12);
    const bio = info[1] || ""
    const ipfs = info[2] || ""
    const pfp = 'http://45.63.64.72:8080/ipfs/' + ipfs

    const navigation = useNavigation();

    const AccountSection = ({ title, address }) => (
        <View style={styles.section}>
            <Image 
                source={{uri: 'https://i.pinimg.com/originals/40/04/f5/4004f55d7bf926153ea5bd2b565b3133.jpg'}}
                style={styles.profpic}
            />
            <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={styles.sectionUsername}>
                    {title}
                </Text>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={styles.sectionAddress}>
                        {address}
                    </Text>
                    <Ionicons name="copy-outline" size={15} color={colors.lightGray} style={{marginLeft: 10}} />
                </TouchableOpacity>
            </View>
        </View>
        );
    {/* <Ionicons name="checkmark-sharp" size={24} color="black" /> */}
    
        //active account is the flatlist ListHeaderComponent
        const ActiveAccount = ()  => (
        <View style={styles.section}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                source={{uri: pfp}}
                style={styles.profpic}
                />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={styles.sectionUsernameActive}>
                    @activeaccountuser
                </Text>
                <TouchableOpacity style={{flexDirection: 'row',}}>
                    <Text style={styles.sectionAddress}>
                        0x123....113879762
                    </Text>
                    <Ionicons name="copy-outline" size={15} color={colors.lightGray} style={{marginLeft: 10}} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <Ionicons name="checkmark-sharp" size={24} color={colors.primary} />
            </View>
            <View>
    
            </View>
        </View>
        )
    
        const AddAccount = ()  => (
            <TouchableOpacity style={styles.section}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons style={{position: 'absolute', zIndex: 10}} name="ios-add-outline" size={32} color={colors.white}/>
                    <View style={styles.profpic}/>
                </View>
                <View style={{justifyContent: 'center', marginLeft: 10}}>
                    <Text style={styles.sectionUsername}>
                        Add account
                    </Text>
                </View>
        </TouchableOpacity>
        )

    const renderItem = ({ item }) => {
    return (
    <TouchableOpacity>
        <AccountSection title={item.title} address={item.address} />
    </TouchableOpacity>
    )}
      
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            >
            <View style={styles.touchable} />
            </TouchableWithoutFeedback>
            <SafeAreaView style={styles.innerContainer}>
                <View style={{marginTop: 8, marginBottom: 8, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.topText}>
                        Switch account
                    </Text>
                </View>
                <FlatList 
                data={DUMMYDATA} 
                renderItem={renderItem} 
                keyExtractor={item => item.id} 
                ListHeaderComponent={ActiveAccount}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={AddAccount}
                />
            </SafeAreaView>
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
    },
    touchable: {
        flex: 1,
    },
    profpic: {
        width: 56,
        height: 56,
        borderRadius: 100,
        backgroundColor: colors.dark    
    },
    section: {
        paddingTop: 12,
        paddingBottom: 12,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
    },
    activeSection: {
        paddingTop: 12,
        paddingBottom: 12,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.outline,
        backgroundColor: colors.lightest
    },
    topText: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 13.5
    },
    sectionUsername: {
        fontFamily: 'Medium',
        color: colors.dark,
        paddingBottom: 6,
        fontSize: 15
    },
    sectionUsernameActive: {
        fontFamily: 'Medium',
        color: colors.primary,
        paddingBottom: 6,
        fontSize: 15
    },
    sectionAddress: {
        fontFamily: 'Regular',
        color: colors.lightGray,
        paddingBottom: 4,
        fontSize: 13.5
    },
  });
  