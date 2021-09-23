import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  Platform,
  TouchableOpacity,
  Alert,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import colors from '../../../assets/colors'
import InfoSection from '../InfoSection';
import CreatedPost from '../CreatedPost';
import LikedPost from '../LikedPost';
import CollectionPost from '../CollectionPost';
import posts from '../../../data/posts'; 
import {useAccountCollection, useAccountCreated, useFeedData, useWallet} from '../../../state/hooks';
import { NFT } from '../../../utils/contract'
import {useNavigation} from '@react-navigation/native';

import { 
  useFonts,
  Poppins_400Regular as Regular,
  Poppins_500Medium as Medium,
  Poppins_600SemiBold as SemiBold,
  Poppins_700Bold as Bold,
  Poppins_800ExtraBold as ExtraBold,
  Poppins_900Black as Black,
} from '@expo-google-fonts/poppins'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const itemWidth = windowWidth / 3 - 1;
const itemHeight = itemWidth * 1.9;


const TabBarHeight = 48;
const HeaderHeight = 300;
const SafeStatusBar = Platform.select({
  ios: 44,
  android: StatusBar.currentHeight,
});

const CollapsibleTabView = () => {

  const navigation = useNavigation();


  let [fontsLoaded] = useFonts({
    Bold,
    Regular,
    SemiBold,
    Medium
  });
  /**
   * stats
   */
  const [tabIndex, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tab1', title: 'Created'},
    {key: 'tab2', title: 'Liked'},
    // {key: 'tab3', title: 'Collected'},
  ]);
  const [canScroll, setCanScroll] = useState(true);

  const tab1Data = useAccountCreated();
  const tab2Data = useFeedData();

  // const tab3Data = useAccountCollection();

  /**
   * ref
   */
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerScrollY = useRef(new Animated.Value(0)).current;
  const listRefArr = useRef([]);
  const listOffset = useRef({});
  const isListGliding = useRef(false);
  const headerScrollStart = useRef(0);
  const _tabIndex = useRef(0);

  /**
   * PanResponder for header
   */
  const headerPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onStartShouldSetPanResponder: (evt, gestureState) => {
        headerScrollY.stopAnimation();
        syncScrollOffset();
        return false;
      },

      onMoveShouldSetPanResponder: (evt, gestureState) => {
        headerScrollY.stopAnimation();
        return Math.abs(gestureState.dy) > 5;
      },

      onPanResponderRelease: (evt, gestureState) => {
        syncScrollOffset();
        if (Math.abs(gestureState.vy) < 0.2) {
          return;
        }
        headerScrollY.setValue(scrollY._value);
        Animated.decay(headerScrollY, {
          velocity: -gestureState.vy,
          useNativeDriver: true,
        }).start(() => {
          syncScrollOffset();
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        listRefArr.current.forEach((item) => {
          if (item.key !== routes[_tabIndex.current].key) {
            return;
          }
          if (item.value) {
            item.value.scrollToOffset({
              offset: -gestureState.dy + headerScrollStart.current,
              animated: false,
            });
          }
        });
      },
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        headerScrollStart.current = scrollY._value;
      },
    }),
  ).current;

  /**
   * PanResponder for list in tab scene
   */
  const listPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        headerScrollY.stopAnimation();
        return false;
      },
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        headerScrollY.stopAnimation();
      },
    }),
  ).current;

  /**
   * effect
   */
  useEffect(() => {
    scrollY.addListener(({value}) => {
      const curRoute = routes[tabIndex].key;
      listOffset.current[curRoute] = value;
    });

    headerScrollY.addListener(({value}) => {
      listRefArr.current.forEach((item) => {
        if (item.key !== routes[tabIndex].key) {
          return;
        }
        if (value > HeaderHeight || value < 0) {
          headerScrollY.stopAnimation();
          syncScrollOffset();
        }
        if (item.value && value <= HeaderHeight) {
          item.value.scrollToOffset({
            offset: value,
            animated: false,
          });
        }
      });
    });
    return () => {
      scrollY.removeAllListeners();
      headerScrollY.removeAllListeners();
    };
  }, [routes, tabIndex]);

  /**
   *  helper functions
   */
  const syncScrollOffset = () => {
    const curRouteKey = routes[_tabIndex.current].key;

    listRefArr.current.forEach((item) => {
      if (item.key !== curRouteKey) {
        if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
          if (item.value) {
            item.value.scrollToOffset({
              offset: scrollY._value,
              animated: false,
            });
            listOffset.current[item.key] = scrollY._value;
          }
        } else if (scrollY._value >= HeaderHeight) {
          if (
            listOffset.current[item.key] < HeaderHeight ||
            listOffset.current[item.key] == null
          ) {
            if (item.value) {
              item.value.scrollToOffset({
                offset: HeaderHeight,
                animated: false,
              });
              listOffset.current[item.key] = HeaderHeight;
            }
          }
        }
      }
    });
  };

  const onMomentumScrollBegin = () => {
    isListGliding.current = true;
  };

  const onMomentumScrollEnd = () => {
    isListGliding.current = false;
    syncScrollOffset();
  };

  const onScrollEndDrag = () => {
    syncScrollOffset();
  };

  /**
   * render Helper
   */
  const renderHeader = () => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [0, -HeaderHeight],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        {...headerPanResponder.panHandlers}
        style={[styles.header, {transform: [{translateY: y}]}]}>
        <InfoSection />
      </Animated.View>
    );
  };

  const renderTab1Item = ({item, index}) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('PostDeets', {item})}
      >
        <View
          style={{
            marginLeft: index % 3 === 0 ? 0 : 1.5,
            marginBottom: 1.5,
            // borderRadius: 16, 
            width: itemWidth,
            height: itemHeight,
          }}>    
        <CreatedPost post={item} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderTab2Item = ({item, index}) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('PostDeets', {item})}
      >
        <View
          style={{
            marginLeft: index % 3 === 0 ? 0 : 1.5,
            marginBottom: 1.5,
            // borderRadius: 16, 
            width: itemWidth,
            height: itemHeight,
          }}>    
        <LikedPost post={item} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderLabel = ({route, focused}) => {
    return (
      <Text style={[styles.label, {opacity: focused ? 1 : 0.5}]}>
        {route.title}
      </Text>
    );
  };

  const tab1EmptyComponent = ({item, index}) => {
    return (
      <>
        <View style={styles.emptyCreated}>
        <Text style={styles.emptyText}>You haven't created anything yet 😔</Text>
        <Text style={styles.emptyText2}>Record your first video 😊</Text>
        </View>
        {/* <LottieView 
          style={styles.downLottieCreated}
          source={require('../../../assets/lottie/16234-down-arrow.json')}
          autoPlay
          loop 
        /> */}
      </>
    )
  } 

  const tab2EmptyComponent = ({item, index}) => {
    return (
      <>
          <View style={styles.emptyCreated}>
          <Text style={styles.emptyText}>You haven't liked anything yet 😔</Text>
          <Text style={styles.emptyText2}>Start exploring content 😊</Text>
          </View>
          {/* <LottieView 
            style={styles.downLottieCreated2}
            source={require('../../../assets/lottie/16234-down-arrow.json')}
            autoPlay
            loop
          /> */}
      </>
    )
  } 

  const renderScene = ({route}) => {
    const focused = route.key === routes[tabIndex].key;
    let numCols;
    let data;
    let renderItem;
    let renderEmptyComponent;
    switch (route.key) {
      case 'tab1':
        numCols = 3;
        data = tab1Data;
        renderItem = renderTab1Item; 
        renderEmptyComponent = tab1EmptyComponent;
        break;
      case 'tab2':
        numCols = 3;
        data = tab2Data;
        renderItem = renderTab2Item;
        renderEmptyComponent = tab2EmptyComponent;
        break;
      default:
        return null;
    }

    return (
      <Animated.FlatList
        // scrollEnabled={canScroll}
        {...listPanResponder.panHandlers}
        numColumns={numCols}
        ref={(ref) => {
          if (ref) {
            const found = listRefArr.current.find((e) => e.key === route.key);
            if (!found) {
              listRefArr.current.push({
                key: route.key,
                value: ref,
              });
            }
          }
        }}
        scrollEventThrottle={16}
        onScroll={
          focused
            ? Animated.event(
                [
                  {
                    nativeEvent: {contentOffset: {y: scrollY}},
                  },
                ],
                {useNativeDriver: true},
              )
            : null
        }
        onMomentumScrollBegin={onMomentumScrollBegin}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        ListHeaderComponent={() => <View style={{height: 1}} />}
        contentContainerStyle={{
          paddingTop: HeaderHeight + TabBarHeight,
          paddingBottom: 80,
          minHeight: 100,
        }}
        showsHorizontalScrollIndicator={false}
        data={data} 
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const renderTabBar = (props) => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [HeaderHeight, 0],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={{
          top: 0,
          zIndex: 1,
          position: 'absolute',
          transform: [{translateY: y }],
          width: '100%',
        }}>
        <TabBar
          {...props}
          onTabPress={({route, preventDefault}) => {
            if (isListGliding.current) {
              preventDefault();
            }
          }}
          style={styles.tab}
          renderLabel={renderLabel}
          indicatorStyle={styles.indicator}
        />
      </Animated.View>
    );
  };

  const renderTabView = () => {
    return (
      <TabView
        onSwipeStart={() => setCanScroll(false)}
        onSwipeEnd={() => setCanScroll(true)}
        onIndexChange={(id) => {
          _tabIndex.current = id;
          setIndex(id);
        }} 
        navigationState={{index: tabIndex, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{
          height: 0,
          width: windowWidth,
        }}
      />
    );
  };

  const [balance, setBalance] = useState(1)
  const wallet = useWallet()
  useEffect(() => {
    (async () => {
      setBalance(JSON.parse(await NFT.balanceOf(wallet.address.toString())))
    })()
  })
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <View style={styles.container}>
      {renderTabView()} 
      {renderHeader()}
    </View>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 34,
    backgroundColor: colors.white
  },
  header: {
    height: HeaderHeight,
    width: '100%',
    position: 'absolute',
  },
  label: {
    fontSize: 15, 
    color: colors.dark, 
    fontFamily: 'Medium',
  },
  labelIcon: {
    width: 40,
    height: 40,
  },
  tab: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    borderBottomColor: colors.outline,
    borderTopColor: colors.outline,
    backgroundColor: colors.white,
    height: TabBarHeight,
  },
  indicator: {
    backgroundColor: colors.dark,
  },
  emptyCreated: {
    height: 50,
    alignItems: 'center',
    marginTop: 32,
  },
  emptyText: {
    fontFamily: 'Regular',
    fontSize: 15,
    color: colors.dark
  },
  emptyText2: {
    fontFamily: 'Regular',
    fontSize: 13.5,
    color: colors.gray,
    marginTop: 4,
  },
  downLottieCreated: {
    height: 40,
    marginBottom: 4,
    alignSelf: 'center',
  },
  downLottieCreated2: {
    height: 40,
    marginBottom: 4,
    marginLeft: 6,
  }
});

export default CollapsibleTabView;
