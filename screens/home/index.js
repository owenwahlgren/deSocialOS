import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, Animated} from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../assets/colors'
import Post from '../../components/Home/Post'
import posts from '../../data/posts'
import Header from '../../components/Home/Header'
import {useNavigation} from '@react-navigation/native';

// const BASE_URI = 'https://source.unsplash.com/random?sig=';

export default function HomeScreen() {

const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY,0,80)
const translateY = diffClamp.interpolate ({
    inputRange:[0,80],
    outputRange:[0,-80],
})

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
        <Animated.View
        style={{
            transform:[
                {translateY:translateY}
            ],
            zIndex: 100,
        }}
        >
            <Header />
        </Animated.View>
        <View style={styles.content}>
            <FlatList 
            data={posts} 
            numColumns={2}
            onEndReached={fetchMore}
            initialNumToRender={6}
            showsVerticalScrollIndicator={false}
            // keyExtractor={e => e}
            renderItem={({item}) => (
                <Post post={item}/>
            )}
            onScroll={(e) => {
                scrollY.setValue(e.nativeEvent.contentOffset.y)

            }}
            />
        </View>    
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  content: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
  },
});
