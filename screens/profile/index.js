import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import InfoSection from '../../components/Profile/InfoSection'
import Categories from '../../components/Profile/Categories'
import HeaderBar from '../../components/Profile/HeaderBar'

import colors from '../../assets/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <View style={{flex: 1}}>
    <HeaderBar />
    <ScrollView style={{backgroundColor: 'black'}}>
      <InfoSection />
      <Categories />
    </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
