/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
const IndexW = ({navigation}: any) => {
  const scroll = useRef<ScrollView>();
  const data = [
    {title: 'Item 1', data: 'data', remain: '1.3', unitData: 'GB'},
    {title: 'Item 2', sms: 'sms', remainSms: '195'},
    {title: 'Item 3', voice: 'voice', remainVoice: '30', unitVoice: 'Min'},
  ];
  const [Index, setIndex] = useState(0);
  useEffect(() => {
    scroll.current?.scrollToEnd();
    console.log(Dimensions.get('screen').height);
  }, []);
  function toggle() {
    navigation.toggleDrawer();
  }
  function renderItemOne({item, index}: any) {
    return (
      <View
        style={[
          style.renderItemOneView,
          {
            elevation: Index === index ? 20 : 5,
            transform: [{scaleY: Index === index ? 1 : 0.85}],
            marginLeft: Index === index ? 0 : 1.2,
          },
        ]}>
        <Text style={style.data}>
          {item.data
            ? item.data
            : item.sms
            ? item.sms
            : item.voice
            ? item.voice
            : 'Data'}
        </Text>

        <Text style={style.gb}>
          {item.remain
            ? item.remain
            : item.remainSms
            ? item.remainSms
            : item.remainVoice
            ? item.remainVoice
            : '1.3'}
          <Text style={style.gb1}>
            {' '}
            {item.unitData
              ? item.unitData
              : item.unitVoice
              ? item.unitVoice
              : null}
          </Text>
        </Text>
        <Text style={style.remainText}>Remaining</Text>
        <Image
          source={require('../Asset/remaining.png')}
          style={style.remain}
          resizeMode="contain"
        />
        <Text style={style.ends}>Ends in 28 days</Text>
        <View style={style.buyView}>
          <Text style={style.buy}>Buy Add-on</Text>
        </View>
      </View>
    );
  }
  const renderItem = ({item}: any) => (
    <View style={style.renderView}>
      <View style={style.renderView1}>
        <Image
          source={require('../Asset/mainLogo.png')}
          style={style.mainLogo}
        />
        <Text style={style.upgrade}>Upgrade to Landline!</Text>
        <Text style={style.description}>
          Have you tried our landline connection. Do more with myGTT landline
        </Text>
      </View>
      <View style={style.renderView2}>
        <Image
          source={require('../Asset/Womencrop.png')}
          style={style.women}
          resizeMode="contain"
        />
      </View>
    </View>
  );
  return (
    <View style={style.mainContainer}>
      <SafeAreaView />
      <View style={style.safeArea}>
        <View style={style.drawerLogoView}>
          <View style={style.subDrawerView}>
            <Pressable onPress={toggle}>
              <Image
                source={require('../Asset/Drawer.png')}
                style={style.drawerLogo}
              />
            </Pressable>
          </View>
          <Image source={require('../Asset/mainLogo.png')} style={style.mygt} />
        </View>
        <View style={style.welcomeView}>
          <Text style={style.welcomeText}>WeLCOMES YOU</Text>
        </View>
        <View style={style.question}>
          <Image source={require('../Asset/help.png')} style={style.help} />
        </View>
      </View>
      <ScrollView ref={scroll} style={{paddingBottom: 50}}>
        <View style={style.middleOne}>
          <View style={style.prepaidView}>
            <Text style={style.prepaidText}>Prepaid</Text>
            <Text>+592 - 6501012</Text>
          </View>
          <View style={style.bundleView}>
            <Text style={style.bundleText}>Plan: Monthly Bundle</Text>
          </View>
          <View style={style.coreView}>
            <Text>Core</Text>
            <Text style={style.coreText}>$100</Text>
          </View>
        </View>
        <View style={style.carouselView}>
          <Carousel
            data={data}
            sliderWidth={Dimensions.get('window').width}
            renderItem={renderItemOne}
            itemWidth={Dimensions.get('window').width / 2}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            onSnapToItem={item => setIndex(item)}
            slideStyle={{zIndex: 1}}
          />
        </View>

        <LinearGradient
          colors={['#004C9C', '#00CFEB']}
          style={style.curve}
          locations={[0.3, 0.7]}>
          <View style={style.subView}>
            <Image
              source={require('../Asset/lend.png')}
              style={style.imageLend}
            />
            <Image
              source={require('../Asset/bill.png')}
              style={style.imageLend}
            />
            <Image
              source={require('../Asset/history.png')}
              style={style.imageLend}
            />
            <Image
              source={require('../Asset/usage.png')}
              style={style.imageLend}
            />
          </View>
          <View style={style.subView2}>
            <Text style={style.subText}>Lend me</Text>
            <Text style={style.subText}>Add-ons</Text>
            <Text style={style.subText}>History</Text>
            <Text style={style.subText}>Usage</Text>
          </View>
          <View style={style.subView3}>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={300}
              itemWidth={Dimensions.get('window').width * (95 / 100)}
            />
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default IndexW;
