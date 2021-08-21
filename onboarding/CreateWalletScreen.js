import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Touchable, SafeAreaView, Alert, FlatList } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import colors from '../assets/colors'
import AppLoading from 'expo-app-loading';
import {useNavigation} from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import * as Clipboard from 'expo-clipboard';
import { setWallet } from '../state/hooks'
import { createNewWallet } from '../utils/wallet'

const DATA = [
    {
      id: '1',
      title: 'Word1',
    },
    {
      id: '2',
      title: 'Word2',
    },
    {
      id: '3',
      title: 'Word3',
    },
    {
        id: '4',
        title: 'Word4',
      },
      {
        id: '5',
        title: 'Word5',
      },
      {
        id: '6',
        title: 'Word6',
      },
      {
        id: '7',
        title: 'Word7',
      },
      {
        id: '8',
        title: 'Word8',
      },
      {
        id: '9',
        title: 'Word9',
      },
      {
          id: '10',
          title: 'Word10',
        },
        {
          id: '11',
          title: 'Word11',
        },
        {
          id: '12',
          title: 'Word12',
        },
  ];


import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const buttonWidth = Dimensions.get("window").width - 32;

const Item = ({title, id}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{id}. {title}</Text>
    </View>
);

export default function CreateWalletScreen() {
    const navigation = useNavigation();

    const renderItem = ({item}) => <Item title={item.title} id={item.id} />;

    const wallet = createNewWallet()
    const list = wallet.mnemonic.phrase.split(' ')
    setWallet(wallet)

    for (let i = 0; i < DATA.length; i++) {
        DATA[i].title = list[i]
    }
    const copyToClipBoard = () => {
        Clipboard.setString(wallet.mnemonic.phrase)
        Alert.alert('Phrase Copied 👍')
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
            <View style={styles.mainView}>
                <Entypo 
                name="chevron-left" 
                size={30} 
                color={colors.dark} 
                onPress={() => navigation.goBack()}
                />
                <Text style={{fontSize: 24, fontFamily: 'Bold', color: colors.dark, marginTop: 24}}>Your Recovery Phrase</Text>
                <Text style={{fontSize: 14, fontFamily: 'Regular', color: colors.gray, marginTop: 16}}>Write these 12 words down, or copy them to a password manager:</Text>
                <View style={{width: '100%', height: 200, backgroundColor: colors.lightest, marginTop: 24}}>
                <FlatList 
                    data={DATA} 
                    renderItem={renderItem} 
                    keyExtractor={item => item.id}
                    numColumns={3}
                />
                </View>
                <TouchableOpacity onPress={copyToClipBoard}>
                <Text style={{fontSize: 15, fontFamily: 'Regular', color: colors.primary, alignSelf: 'center', marginTop: 16}}>Copy to Clipboard</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('HomeTabs')}
            >
                <Text style={styles.text}>Done</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 80,
        backgroundColor: colors.white
    },
    mainView: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    button: {
        height: 52,
        width: '90%',
        backgroundColor: colors.primary,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    text: {
        color: 'white',
        fontFamily: 'SemiBold',
        fontSize: 16,
        alignSelf: 'center',
    },
    title: {
        fontFamily: 'Regular',
        fontSize: 15,
        color: colors.gray,
    },
    item: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    }
  });
