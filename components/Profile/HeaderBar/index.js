import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight, Modal, TouchableWithoutFeedback, Image, useWindowDimensions, TouchableOpacity} from 'react-native'
import colors from '../../../assets/colors'
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

import { color } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { useWallet } from '../../../state/hooks'


export default function HeaderBar() {

  const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const wallet = useWallet()
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
        <SafeAreaView style={{backgroundColor: colors.white}}>
            <View style={styles.container}>
                <TouchableOpacity 
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center', 
                }}
                onPress={() => {setModalVisible(true)}}
                >
                        <Text style={styles.adressText}>{wallet.address.toString().substring(0,12)}</Text>
                    <Ionicons name="caret-down" size={18} color={colors.dark} />
                </TouchableOpacity>
                <TouchableOpacity 
                style={{flex: 1, alignItems: 'flex-end', position: 'absolute', right: 0}}
                onPress={() => navigation.navigate('ProfileSettings')}
                >
                    <Feather name="menu" size={24} color={colors.dark} />
                </TouchableOpacity>
            </View>


            <View>
              <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              >
                <TouchableWithoutFeedback 
                style={{flex: 1}} 
                onPress={() => {setModalVisible(!modalVisible);}}
                >
                <View 
                style={{flex: 1, backgroundColor: colors.modalBackground}}
                
                >
                </View>
                </TouchableWithoutFeedback>
                <SafeAreaView style={styles.modalView}>
                    <TouchableHighlight 
                    style={{
                    position: 'absolute', 
                    alignSelf: 'flex-start',
                    marginLeft: 12, 
                    marginTop: 12
                    }}
                    onPress={() => {setModalVisible(!modalVisible);}}
                    >
                    <Ionicons name="close" size={24} color={colors.dark} />
                    </TouchableHighlight>
                    <Text style={styles.accountText}>Account</Text>
                    <View style={styles.modalSection}>
                      <Image
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={styles.profileImage}
                      />
                      <View style={styles.nameContainer}>
                        <Text style={styles.usernameText}>@UniqueUsername</Text>
                        <Text style={styles.addressText}>0x...4859 (or ens)</Text>
                      </View>
                    </View>
                    <View style={styles.modalSection}>
                      <Image
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYd3P-FEkCNnvzfb5y3JM2XC3vaYMj3xcP7CPenrvUFQSjPtxixcSnEa9A_xGbHFhuh8&usqp=CAU',
                      }}
                      style={styles.profileImage}
                      />
                      <View style={styles.addAccountContainer}>
                        <Text style={styles.usernameText}>Add Account</Text>
                      </View>
                    </View>
                </SafeAreaView>
              </Modal>
            </View>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginRight: 16,
        marginLeft: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    adressText: {
        color: colors.dark,
        fontFamily: 'SemiBold',
        fontSize: 16,
    },
    modalView: {
        backgroundColor: colors.white,
        borderRadius: 0,
        height: 300,
        alignItems: 'center',
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
      modalSection: {
        width: '100%',
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
      },
      profileImage: {
        width: 56,
        height: 56,
        borderRadius: 50,
        resizeMode: 'cover',
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
})
