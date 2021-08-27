import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import colors from '../../../assets/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import EditProfileHeader from '../EditProfileHeader';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';


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
    const [image, setImage] = useState(null);
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
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
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
            <EditProfileHeader />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex: 1}}>
                {image &&
                    <Image
                    source={{uri: image}}
                    style={styles.profileImage}
                    />
                }
            <TouchableOpacity onPress={pickImage}>
                <Text style={{fontFamily: 'Regular', color: colors.primary, fontSize: 13, alignSelf: 'center', marginBottom: 16}}>
                Change Image
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
                    placeholder="@randyusername1234"
                    maxLength={20}
                    multiline
                    style={styles.sectionText}
                    keyboardType='default'
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
                    placeholder="biggup for the gang mfer"
                    multiline
                    maxLength={50}
                    style={styles.sectionText2}
                    keyboardType='default'
                />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.goBack()}
            >
                <Text style={{fontFamily: 'Medium', fontSize: 16, color: colors.white}}>Done</Text>
            </TouchableOpacity>
            </View>
            </View>
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
    },
    sectionContainer: { 
        paddingBottom: 16,
        marginRight: 16,
        marginLeft: 16,
        flex: 1,
    },
    sectionHeader: {
        marginTop: 16,
        marginBottom: 8,
    },
    sectionHeaderText: {
        fontFamily: 'SemiBold',
        fontSize: 14,
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
        borderRadius: 50,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: 32,
        marginBottom: 8,
      },
})
