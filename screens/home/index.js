import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../assets/colors'
import Post from '../../components/Home/Post'
import posts from '../../data/posts'

// const BASE_URI = 'https://source.unsplash.com/random?sig=';

export default function HomeScreen() {

const [data, setDate] = useState([]);

useEffect(() => {
    fetchMore();
}, []);

const fetchMore = () => {
    setDate(prevState => [
        ...prevState,
        ...Array.from({length: 6}).map((_, i) => i + 1 + prevState.length),
    ]);
};

return (
    <SafeAreaView style={styles.container}>
        <FlatList 
        data={posts} 
        style={styles.list}
        numColumns={2}
        onEndReached={fetchMore}
        initialNumToRender={6}
        showsVerticalScrollIndicator={false}
        keyExtractor={e => e}
        renderItem={({item}) => (
            <Post post={item}/>
        )}
        />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  background: {
      position: 'absolute',
      backgroundColor: colors.black,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: '100%'
  },
  list: {
      width: '100%',
      backgroundColor: colors.black,
  }
});
