import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    Animated, 
    TextInput,
    SectionList
} from 'react-native'
import colors from '../../../assets/colors'
import { useCardAnimation } from '@react-navigation/stack';
import { current } from '@reduxjs/toolkit';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { 
    useFonts,
    Poppins_400Regular as Regular,
    Poppins_500Medium as Medium,
    Poppins_600SemiBold as SemiBold,
    Poppins_700Bold as Bold,
    Poppins_800ExtraBold as ExtraBold,
    Poppins_900Black as Black,
  } from '@expo-google-fonts/poppins'

  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function SendModal() {

    const navigation = useNavigation();

    const { current } = useCardAnimation();

    let [fontsLoaded] = useFonts({
    Bold,
    Regular,
    SemiBold
    });
    if (!fontsLoaded) {
    return <AppLoading />;
    } else {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            >
            <View style={styles.touchable} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
            <View style={styles.innerContainer}>
                <Text style={styles.topText}>Send</Text>
                <View style={styles.toContainer}>
                    <View style={styles.leftTo}>
                    <Text style={styles.toText}>To:</Text>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='@name, ENS, or address'
                        autoCompleteType='off'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='twitter'
                        autoFocus={true}
                    />
                    </View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('ScanModal')}
                    >
                        <Ionicons name="scan" size={24} color={colors.dark} />
                    </TouchableOpacity>
                </View>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => 
                    <Text style={styles.header}>
                    {title}
                    </Text>}
                />
            </View>
            </TouchableWithoutFeedback>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    innerContainer: {
        height: '83%', 
        width: '100%', 
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'rgba(255,255,255,1)',
        paddingLeft: 20,
        paddingRight: 20,
    },
    touchable: {
        flex: 1,
    },
    topText: {
        fontFamily: 'Medium',
        fontSize: 16,
        marginTop: 10,
        alignSelf: 'center',
    },
    toText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: colors.gray,
    },
    toContainer: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingBottom: 8,
    },
    textInput: {
        fontFamily: 'Medium',
        fontSize: 16,
        marginLeft: 8,
        color: colors.dark,
    },
    checkmark: {
        alignSelf: 'flex-end',
    },
    leftTo: {
        flexDirection: 'row',
    }
  });
  