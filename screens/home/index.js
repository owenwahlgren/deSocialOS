import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
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
    <View style={styles.container}>
        <SafeAreaView style={styles.content} contentInsetAdjustmentBehavior='automatic'>
            <FlatList 
            data={posts} 
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
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  content: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
  },
  list: {
      flex: 1,
      backgroundColor: colors.black,
  }
});
