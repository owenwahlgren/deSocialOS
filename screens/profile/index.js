import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import InfoSection from '../../components/Profile/InfoSection'
import Categories from '../../components/Profile/Categories'

import colors from '../../assets/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProfileScreen() {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <InfoSection />
      <Categories />
    </ScrollView>
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
