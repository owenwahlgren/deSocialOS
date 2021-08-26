import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../../assets/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import EditProfileHeader from '../EditProfileHeader';
import {useNavigation} from '@react-navigation/native';


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

    const navigation = useNavigation();

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
            <View style={{flex: 1}}>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>aiudoiu</Text>
                </View>
                <TouchableOpacity 
                style={styles.section}
                >
                    <Text style={styles.sectionText}>dduhd</Text>
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
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    section: {
        height: 40,
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
    },
    sectionText: {
        fontFamily: 'Medium',
        fontSize: 15,
        color: colors.dark,
        marginLeft: 8,
    },
    sectionContainer: {
        flex: 0,
        paddingBottom: 16,
        marginRight: 16,
        marginLeft: 16,
        borderBottomColor: colors.outline,
        borderBottomWidth: 1,
    },
    sectionHeader: {
        marginTop: 16,
        marginBottom: 8,
    },
    sectionHeaderText: {
        fontFamily: 'SemiBold',
        fontSize: 13,
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
    }
})
