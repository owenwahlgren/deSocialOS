import "@ethersproject/shims";
import { ethers } from "ethers";
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import colors from '../../../assets/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useWallet, useAccountInfo } from '../../../state/hooks'
import { SOCIAL_ABI, SOCIAL_ADDRESS, provider } from '../../../utils/contract'
import { pinToIPFS } from '../../../utils/ipfs'


import AppLoading from 'expo-app-loading';

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins';

  import { SimpleLineIcons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';


export default function EditProfile({route}) {
    const data = useAccountInfo()
    const [username, setUsername] = useState(data[0] || "Enter your username")
    const [bio, setBio] = useState(data[1] || "Enter your bio")
    const [ipfs, setIPFS] = useState(data[2] || "")
    const [image, setImage] = useState('http://45.63.64.72:8080/ipfs/' + ipfs);
    const wallet = useWallet()
    const signer = wallet.connect(provider)
    const SOCIAL = new ethers.Contract(SOCIAL_ADDRESS, SOCIAL_ABI, signer)


    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to do this!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
       
        if (!result.cancelled) {
          setImage(result.uri);
          (async () => {
            const hash = await pinToIPFS(wallet.address.toString(), result.uri, "jpg")
            console.log('ipfs hash:', hash)
            setIPFS(hash)
          })()
        }
      };

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
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
              <View style={{flex: 1, width: '100%', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', alignSelf: 'center'}}>
                      <Text style={styles.adressText}>Edit Profile</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity
                onPress={async () => {
                    let tx = await SOCIAL.editProfile(username, bio, ipfs, {gasLimit: 2500000})
                    console.log('tx:', tx.hash)
                    console.log('waiting for tx to mine...')
                    navigation.goBack()
                    await tx.wait() 
                    console.log('tx mined')
                }}
                >
                  <Text style={styles.doneText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
            <View style={{flex: 1}}>
                {image &&
                    
                    <Image
                    source={{uri: "http://45.63.64.72:8080/ipfs/" + ipfs}}
                    style={styles.profileImage}
                    />
                }
            <TouchableOpacity onPress={pickImage}>
                <Text style={{fontFamily: 'Regular', color: colors.primary, fontSize: 13, alignSelf: 'center', marginBottom: 16}}>
                Change Profile Image
                </Text>
            </TouchableOpacity>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>Username:</Text>
                </View>
                <TouchableOpacity 
                style={styles.section}
                >
                <TextInput 
                    placeholder={username}
                    maxLength={18}
                    style={styles.sectionText}
                    keyboardType='default'
                    onChangeText={setUsername}
                    
                />
                </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}> 
                    <Text style={styles.sectionHeaderText}>Bio:</Text>
                </View>
                <TouchableOpacity 
                style={styles.section}
                >
                <TextInput 
                    placeholder={bio} 
                    multiline
                    maxLength={50}
                    style={styles.sectionText2}
                    keyboardType='default'
                    onChangeText={setBio}
                    height={120}
                />
                </TouchableOpacity>
            </View>
            {/* <View style={styles.bottomContainer}>
            <TouchableOpacity 
            style={styles.button}
            onPress={async () => {
                let tx = await SOCIAL.editProfile(username, bio, ipfs, {gasLimit: 2500000})
                console.log('tx:', tx.hash)
                console.log('waiting for tx to mine...')
                navigation.goBack()
                await tx.wait() 
                console.log('tx mined')
            }}
            >
                <Text style={{fontFamily: 'Medium', fontSize: 16, color: colors.white}}>Done</Text>
            </TouchableOpacity>
            </View> */}
            </View>
            </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    section: {
        height: 24,
        flexDirection: 'row',
        flex: 1,
    },
    sectionText: {
        fontFamily: 'Medium',
        fontSize: 15,
        color: colors.dark,
    },
    sectionText2: {
        fontFamily: 'Medium',
        fontSize: 15,
        color: colors.dark,
        width: '100%',
    },
    sectionContainer: { 
        paddingBottom: 10,
        marginRight: 16,
        marginLeft: 16,
        flex: 1,
    },
    sectionHeader: {
        marginTop: 16,
        marginBottom: 2,
    },
    sectionHeaderText: {
        fontFamily: 'Medium',
        fontSize: 13.5,
        color: colors.gray,
    },
    button: {
    borderRadius: 6,
    marginBottom: 24,
    paddingVertical: 8,
    width: 180,
    height: 48,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    },
    bottomContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end',
    },
    profileImage: {
        width: 100,
        height: 100,
        backgroundColor: colors.outline,
        borderRadius: 50,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: 32,
        marginBottom: 8,
    },
    container: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: colors.outline,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    adressText: {
        color: colors.dark,
        fontFamily: 'SemiBold',
        fontSize: 16,
    },
      textStyle: {
        color: colors.dark,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      accountText: {
        color: colors.dark,
        fontFamily: 'SemiBold',
        fontSize: 15,
        marginTop: 12,
        marginBottom: 32,
      },
      nameContainer: {
        marginLeft: 16,
        height: 42,
        justifyContent: 'space-between',
      },
      addAccountContainer: {
        marginLeft: 16,
        height: 42,
        justifyContent: 'center',
      },
      usernameText: {
        fontFamily: 'SemiBold',
        color: colors.dark,
        fontSize: 15,
      },
      addressText: {
        fontFamily: 'Regular',
        color: colors.dark,
        fontSize: 14,
      },
      cancelText: {
        fontFamily: 'Medium',
        color: colors.dark,
        fontSize: 15,
        marginLeft: 10,
      },
      doneText: {
        fontFamily: 'Medium',
        color: colors.primary,
        fontSize: 15,
        marginRight: 10,
      },
    
})
