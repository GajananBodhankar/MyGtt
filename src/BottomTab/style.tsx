import {Dimensions, Platform, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  accountIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  tababrstyle: {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: 'white',
      // bottom:
      // Platform.OS == 'ios' ? Dimensions.get('screen').height / 26 : 0,
      // height: Platform.OS == 'ios' && 50,
      // paddingVertical: 10,
      elevation: 0,
      marginLeft: 15,
      marginRight: 15,
      borderRadius: 10,
      marginBottom:
        Platform.OS == 'ios' ? Dimensions.get('screen').height / 26 : 10,
    },
  },
  innerView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    // paddingTop: 10,
    borderRadius: 10,
    width: 40,
  },
  innerViewStore: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    // paddingTop: 10,
    borderRadius: 10,
    width: 80,
  },
  innerViewFocusedStore: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingTop: 10,
    borderRadius: 10,
    width: 80,
  },
  focus: {
    backgroundColor: '#a1b9de',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  notfocus: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  focusStore: {
    backgroundColor: '#a1b9de',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
  },
  notfocusStore: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  innerViewFocused: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingTop: 10,
    backgroundColor: '#a1b9de',
    borderRadius: 10,
    width: 40,
  },
  textStyle: {
    fontSize: 10,
    paddingTop: 6,
  },
  textStyleFocused: {
    fontSize: 10,
    paddingTop: 5,
    color: '#004C9C',
  },
  welcomeIcon: {
    height: 45,
    width: 45,
    // marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
  storetext: {
    fontSize: 10,
    color: '#004C9C',
  },
});
