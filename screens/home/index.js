import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../../assets/colors'

const BASE_URI = 'https://source.unsplash.com/random?sig=';

export default function HomeScreen() {

const width = Dimensions.get('window').width / 2 - 16 * 2;
const height = width * 2;

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
    <View style={styles.background}>
        <FlatList 
        data={data} 
        style={styles.list}
        numColumns={2}
        onEndReached={fetchMore}
        initialNumToRender={6}
        showsVerticalScrollIndicator={false}
        keyExtractor={e => e}
        renderItem={({item}) => (
            <Image source={{uri: BASE_URI + item}} style={styles.item} />
        )}
        />
        {/* <Text style={{fontFamily: 'Bold', fontSize: 40, color: colors.dark}}>Home</Text> */}
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
  background: {
      position: 'absolute',
      backgroundColor: colors.black,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: '100%'
  },
  item: {
      aspectRatio: .5,
      width: '100%',
      flex: 1,
  },
  list: {
      width: '100%',
      backgroundColor: colors.black
  }
});
