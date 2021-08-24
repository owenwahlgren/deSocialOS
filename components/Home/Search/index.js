import React, {useState} from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, ScrollView, SectionList, FlatList, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../../../assets/colors';
import {useNavigation} from '@react-navigation/native';

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SECTIONS = [
    {
        title: "Hot Bids 🔥",
        data: [
        {
            key: "1",
            text: "3.6 ETH",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-palm-tree-in-front-of-the-sun-1191-large.mp4",
        },
        {
            key: "2",
            text: "Item text 2",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-green-ink-1196-large.mp4",
        },
        {
            key: "3",
            text: "Item text 3",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
        },
        {
            key: "4",
            text: "3.6 ETH",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-palm-tree-in-front-of-the-sun-1191-large.mp4",
        },
        {
            key: "5",
            text: "Item text 2",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-green-ink-1196-large.mp4",
        },
        {
            key: "6",
            text: "Item text 3",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
        },
        {
            key: "7",
            text: "3.6 ETH",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-palm-tree-in-front-of-the-sun-1191-large.mp4",
        },
        {
            key: "8",
            text: "Item text 2",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-green-ink-1196-large.mp4",
        },
        {
            key: "9",
            text: "Item text 3",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
        },
        ]
    },
    {
        title: "Live Auctions",
        data: [
        {
            key: "1",
            text: "Item text 1",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-small-pink-flowers-1186-large.mp4",
        },
        {
            key: "2",
            text: "Item text 2",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-palm-tree-in-front-of-the-sun-1191-large.mp4",
        },
        {
            key: "3",
            text: "Item text 3",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-weeds-waving-in-the-breeze-1178-large.mp4",
        },
        ]
    },
    {
        title: "Hot Bids",
        data: [
        {
            key: "1",
            text: "3.6 ETH",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-palm-tree-in-front-of-the-sun-1191-large.mp4",
        },
        {
            key: "2",
            text: "Item text 2",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-green-ink-1196-large.mp4",
        },
        {
            key: "3",
            text: "Item text 3",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
        },
        ]
    },
    {
        title: "Live Auctions",
        data: [
        {
            key: "1",
            text: "Item text 1",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-small-pink-flowers-1186-large.mp4",
        },
        {
            key: "2",
            text: "Item text 2",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-palm-tree-in-front-of-the-sun-1191-large.mp4",
        },
        {
            key: "3",
            text: "Item text 3",
            uri: "https://assets.mixkit.co/videos/preview/mixkit-weeds-waving-in-the-breeze-1178-large.mp4",
        },
        ]
    },
]



const Search = ({item}) => {
    return (
        <TouchableOpacity>
            <Video
            source={{
                uri: item.uri,
            }}
            style={styles.miniVid}
            resizeMode='cover'
            />
            <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
    )
}


export default () => {

    const navigation = useNavigation();

    const [value, setValue] = useState("")

    let [fontsLoaded] = useFonts({
        Bold,
        Regular,
        SemiBold,
        Medium
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={{flexDirection: 'row', flexDirection: 'row', alignItems: 'center', marginBottom: 24, marginTop: 16, marginLeft: 16}}>
                    <Ionicons 
                    name="md-arrow-back" 
                    size={30} 
                    color={colors.dark} 
                    onPress={() => navigation.navigate('HomeTabs')}
                    />
                </View>
                <Text style={styles.titleText}>Discover Incredible NFT Moments</Text>
                <View style={styles.searchBar}>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={(text) => setValue(text)}
                        placeholder={'Search'}
                        placeholderTextColor={colors.lightGray}
                    />
                </View>
                            
           
            <SectionList 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingLeft: 16}}
                stickySectionHeadersEnabled={false}
                sections={SECTIONS}
                renderSectionHeader={({section}) => (
                    <>
                    <Text style={styles.headerText}>{section.title}</Text>
                    <FlatList 
                        data={section.data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => {
                            return <Search item={item} />;
                        }}
                    />
                    </>
                )}
                renderItem={({item, section}) => {
                    return null;
                    return ( 
                    <Search item={item} />  
                    )}}
            />
            </ScrollView>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create ({
    miniVid: {
        width: 150,
        height: 300,
        marginRight: 8,
        borderRadius: 4,
    },
    textInput: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: colors.dark,
        padding: 16,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'SemiBold',
        color: colors.dark,
        marginBottom: 10,
        marginTop: 46,
    },
        itemText: {
        color: colors.dark,
        fontSize: 14,
        fontFamily: 'Medium',
        marginTop: 4,
    },
    titleText: {
        fontFamily: 'SemiBold',
        color: colors.dark,
        fontSize: 28,
        marginLeft: 16,
        marginRight: 16,
    },
    searchBar: {
        justifyContent: 'center',
        marginTop: 16,
        height: 48,
        marginRight: 16,
        marginLeft: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.outline,
        backgroundColor: colors.lightest,
    }
})
