/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexW from '../Welcome/Indexw';
import IndexL from '../LiveChat/IndexL';
import Indexs from '../Store/Indexs';
import IndexT from '../Topup/IndexT';
import IndexA from '../Account/IndexA';
import {Dimensions, Image, Platform, Text, View} from 'react-native';
import {style} from './style';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={style.tababrstyle} initialRouteName="Welcome">
      <Tab.Screen
        name="Account"
        component={IndexA}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={style.innerViewFocused}>
                <View style={style.focus}>
                  <Image
                    source={require('../Asset/account.png')}
                    style={style.accountIcon}
                  />
                </View>
                <Text style={style.textStyleFocused}>Account</Text>
              </View>
            ) : (
              <View style={style.innerView}>
                <View style={style.notfocus}>
                  <Image
                    source={require('../Asset/account.png')}
                    style={style.accountIcon}
                  />
                </View>
                <Text style={style.textStyle}>Account</Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Topup"
        component={IndexT}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={style.innerViewFocused}>
                <View style={style.focus}>
                  <Image
                    source={require('../Asset/top.png')}
                    style={style.accountIcon}
                  />
                </View>
                <Text style={style.textStyleFocused}>Top up</Text>
              </View>
            ) : (
              <View style={style.innerView}>
                <View style={style.notfocus}>
                  <Image
                    source={require('../Asset/top.png')}
                    style={style.accountIcon}
                  />
                </View>
                <Text style={style.textStyle}>Top up</Text>
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="Welcome"
        component={IndexW}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../Asset/welcome.png')}
                style={style.welcomeIcon}
              />
            ) : (
              <Image
                source={require('../Asset/welcome.png')}
                style={style.welcomeIcon}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Indexs}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={style.innerViewFocusedStore}>
                <View style={style.focusStore}>
                  <Image
                    source={require('../Asset/Store.png')}
                    style={style.accountIcon}
                  />
                </View>
                <Text style={style.storetext}>Store locator</Text>
              </View>
            ) : (
              <View style={style.innerViewStore}>
                <View style={style.notfocusStore}>
                  <Image
                    source={require('../Asset/Store.png')}
                    style={style.accountIcon}
                  />
                </View>
                <Text style={style.textStyle}>Store locator</Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="LiveChat"
        component={IndexL}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={style.innerViewFocusedStore}>
                <View style={style.focusStore}>
                  <Image
                    source={require('../Asset/Chat.png')}
                    style={style.accountIcon}
                  />
                </View>
                <Text style={style.storetext}>Live chat</Text>
              </View>
            ) : (
              <View style={style.innerViewStore}>
                <View style={style.notfocusStore}>
                  <Image
                    source={require('../Asset/Chat.png')}
                    style={style.accountIcon}
                  />
                </View>
                <Text style={style.textStyle}>Live chat</Text>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
