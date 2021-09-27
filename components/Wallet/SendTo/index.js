import React, {useState, useEffect, setState} from 'react'
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
    Switch,
    ActivityIndicator,
} from 'react-native'
import colors from '../../../assets/colors'
import { useCardAnimation } from '@react-navigation/stack';
import { current } from '@reduxjs/toolkit';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import filter from 'lodash.filter';

import { human, systemWeights, iOSUIKit} from 'react-native-typography';

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'


export default function SendTo() {
    const navigation = useNavigation();
    const [shouldShow, setShouldShow] = useState('');
    const [input, setInput] = useState('');

    const [state, setState] = useState({});
    const [filteredData, setfilteredData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchPosts();
        return () => {
        setState({}); 
        }
    }, [])

    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/photos';
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setfilteredData(responseJson);
            setmasterData(responseJson);
        }).catch((error) => {
            console.error(error);
        })
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilteredData(newData);
            setSearch(text);
        } else {
            setfilteredData(masterData);
            setSearch(text);
        }
    }
    

    const MyWallets = ({item}) => {
        return (
            <TouchableOpacity 
            onPress={() => navigation.navigate('SendModal', {username: item.title, address: item.id, uri: item.url})}
            style={styles.mywallet}
            >
            <Image
            style={styles.walletImage}
            source={{uri: item.url}}
            />
            <Text 
            style={styles.myWalletName}
            numberOfLines={1}
            >
            {item.title}
            </Text>
            </TouchableOpacity>
        )
    };
    
      const Recent = ({item}) => {
        return (
            <TouchableOpacity 
            onPress={() => navigation.navigate('SendModal', {username: item.title, address: item.id, uri: item.url})}
            style={styles.recent}
            >
                <Image
                style={styles.walletImage}
                source={{uri: item.thumbnailUrl}}
                />
            <View style={styles.recentTextContainer}>
                <Text 
                numberOfLines={1}
                style={styles.username}
                >
                {item.title}
                </Text>
                <Text style={styles.address}>{item.id}</Text>
            </View>
            </TouchableOpacity>
        )
      };

    const FirstView = () => (
        <>
        <FlatList 
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={Recent}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode='on-drag'
            ListHeaderComponent={
                <>
                <Text style={styles.sectionTitle}>My wallets</Text>
                <View style={styles.list}>
                    <FlatList 
                    data={filteredData}
                    renderItem={MyWallets}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    />
                </View>
                <Text style={styles.sectionTitle}>Recent</Text>
                </>
            }
        />
        </>
    );

    const SecondView = () => (
        <>
        <View style={{marginRight: 20,}}>
        <FlatList 
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ItemView}
            keyboardDismissMode='on-drag'
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <View style={{marginTop: 20, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SemiBold', color: colors.dark, fontSize: 16, marginLeft: 20,}}>Reccomended </Text>
                </View>
            }
        />
        </View>
        </>
    );

    const ItemView = ({item}) => {
        return (
            <TouchableOpacity 
            onPress={() => navigation.navigate('SendModal', {username: item.title, address: item.id, uri: item.url})}
            style={styles.recent}
            >
                <Image
                style={styles.walletImage}
                source={{uri: item.thumbnailUrl}}
                />
            <View style={styles.recentTextContainer}>
                <Text 
                numberOfLines={1}
                style={styles.username}
                >
                {item.title}
                </Text>
                <Text style={styles.address}>{item.id}</Text>
            </View>
            </TouchableOpacity>
        )
    }

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
                    <View style={styles.toContainer}> 
                        <View style={styles.leftTo}>
                            <Feather name="search" size={22} color={colors.lightGray}/>
                            <TextInput 
                                style={styles.textInput}
                                placeholder='@user, ENS, or address'
                                autoCompleteType='off'
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='twitter'
                                autoFocus={true}
                                value={search}
                                onChangeText={(text) => {
                                    searchFilter(text);
                                    setShouldShow(text);
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ScanModal')}
                            >
                            <Ionicons name="scan" size={22} color={colors.dark} />
                        </TouchableOpacity>
                    </View>
                    {shouldShow ? (
                        <SecondView />
                    ): 
                        <FirstView />
                    }
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
        marginTop: 10,
        marginBottom: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: colors.lightest,
        borderRadius: 6,
        paddingLeft: 10,
        paddingRight: 10,
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
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 16,
    },
    walletImage: {
        height: 52,
        width: 52,
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
        marginRight: 16,
        paddingRight: 20,
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
    itemStyle: {
        padding: 10,
    },
    list: {
        marginBottom: 10,
    }
  });
  