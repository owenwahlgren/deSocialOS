import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import InfoSection from '../../components/Profile/InfoSection'

import colors from '../../assets/colors';

export default function ProfileScreen() {
  return (
    <ScrollView>
      <InfoSection />
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
