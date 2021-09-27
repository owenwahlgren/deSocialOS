import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    Animated, 
    TextInput,
    SectionList,
    SafeAreaView,
    FlatList,
    ScrollView,
    Image,
} from 'react-native'
import colors from '../../../assets/colors'
import { useCardAnimation } from '@react-navigation/stack';
import { current } from '@reduxjs/toolkit';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import Asset from '../Asset';
import Activity from '../Activity';
import { fetchWalletActivity } from '../../../utils/walletActivity'

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

  const DUMMYDATA = [
    {
    id: 1,
    uri: 'https://tsbnews.com/wp-content/uploads/2020/07/Viral-Photos-Of-Mark-Zuckerberg-With-Loads-Of-Sunscreen-On-His-Face-tsbnews.com2_.jpg'
    },
  ];


export default function SendAsset() {

    const navigation = useNavigation();
    const route = useRoute();
    // const {username, uri, address} = route.params;
    // console.log({username, uri, address})

    const renderAsset = ({ item }) => 
    ( 
    <>
    <Asset post={item} /> 
    </>
    )

    let [fontsLoaded] = useFonts({
    Bold,
    Regular, 
    SemiBold
    });
    if (!fontsLoaded) {
    return <AppLoading />;
    } else {
    return (
        <SafeAreaView style={styles.container}>
                    <FlatList 
                        data={DUMMYDATA}
                        renderItem={renderAsset}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        keyboardDismissMode='on-drag'
                        ListHeaderComponent={
                            <TouchableOpacity 
                                style={{height: 20}}
                                onPress={() => navigation.navigate('SendAmountScreen')}
                            >
                                <Text>(go to next screen)</Text>
                            </TouchableOpacity>
                        }
                    />
        </SafeAreaView>
    );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    toText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: colors.gray,
    },
    toContainer: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    textInput: {
        fontFamily: 'Regular',
        fontSize: 14,
        marginLeft: 8,
        color: colors.dark,
    },
    leftTo: {
        flexDirection: 'row',
        flex: 1,
    },
    sectionTitle: {
        fontFamily: 'SemiBold',
        fontSize: 16,
        color: colors.dark,
        marginTop: 32,
        marginLeft: 20,
        marginBottom: 16,
    },
    walletImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
    },
    mywallet: {
        left: 20,
        marginRight: 8,
        width: 100,
        paddingTop: 10,
        alignItems: 'center',
    },
    recent : {
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
    },
    recentTextContainer: {
        marginLeft: 16,
        width: '100%',
        justifyContent: 'center',
    },
    username: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: colors.dark,
    },
    address: {
        fontFamily: 'Regular',
        fontSize: 13.5,
        color: colors.gray,
        marginTop: 2,
    },
    myWalletName: {
        fontFamily: 'Regular',
        fontSize: 13.5,
        color: colors.gray,
        marginTop: 4,
    },
    profPic: {
        width: 40,
        height: 40,
        borderRadius: 60,
    },
    forText: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 15
    }
  });
  