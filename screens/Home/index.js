import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView, Animated} from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../assets/colors'
import Post from '../../components/Home/Post'
// import posts from '../../data/posts'
import {useFeedData, fetchFeed, fetchAccountInfo, useWallet } from '../../state/hooks'
import posts from '../../data/posts'
import Header from '../../components/Home/Header'
import {useNavigation} from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { useRefresh } from 'react-admin'
import { SafeAreaView } from 'react-native-safe-area-context';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const itemWidth = windowWidth /2 - .5 ;
const itemHeight = itemWidth * 2; 


const HomeScreen = ({navigation}) => {


const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY,0,80)
const translateY = diffClamp.interpolate ({
    inputRange:[0,80],
    outputRange:[0,-80],
})


console.log('home refresh')
const posts = useFeedData()
// console.log(posts)


// const [selected, setSelected] = useState(false)
// useEffect(() => {
//     setSelected(true)
// })
// const ListHeader = () => {
//     return (
//         <View style={{marginTop: 200}}>
//             <View style={{height: 30}}>
//                 <Text>Sort section (under const.)</Text>
//             </View>
//         </View>
//     )
// }


return (
    <>
    <StatusBar style="dark" />
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
        <View style={{
            width: '100%',
            flex: 1,
            alignItems: 'center',
            }}>
            <FlatList 
            // ListHeaderComponent={ListHeader}
            data={posts} 
            extraData={useFeedData()}
            numColumns={2}
            initialNumToRender={4}
            // contentContainerStyle={{
            //     paddingBottom: 86,
            //     paddingTop: 40,
            // }}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
                <TouchableOpacity
                onPress={()=>navigation.navigate('PostDeets', {item})}  
                >
                <View style={{
                    marginLeft: index % 2 === 0 ? 0 : 1,
                    marginBottom: 1,
                    width: itemWidth,
                    height: itemHeight,
                }}>
                <Post post={item}/>
                </View>
                </TouchableOpacity>
            )}
            onScroll={(e) => {
                scrollY.setValue(e.nativeEvent.contentOffset.y)
            }}
            />
        </View>    
    </View>
    </>
);
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
