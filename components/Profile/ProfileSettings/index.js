import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ProfileSettingsHeader from '../ProfileSettingsHeader';
import colors from '../../../assets/colors'
import { SafeAreaView } from 'react-native-safe-area-context';


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


export default function ProfileSettings({route}) {

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
            <ProfileSettingsHeader />
            <ScrollView>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>ACCOUNT</Text>
                </View>
                <TouchableOpacity 
                style={styles.section}
                //ADD ONPRESS FUNCTION THAT DISCONNECTS ACCOUNT 
                //AND RETURNS TO ONBOARDING START SCREEN HERE
                >
                    {/* <SimpleLineIcons name="logout" size={18} color={colors.gray} /> */}
                    <Text style={styles.sectionText}>✌️ Log Out / Disconnect</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
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
})
