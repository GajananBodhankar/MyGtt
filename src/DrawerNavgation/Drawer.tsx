import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from '../BottomTab/BottomTab';

const Navg = createDrawerNavigator();

const Drawer = () => {
  return (
    <Navg.Navigator screenOptions={{headerShown: false, drawerType: 'front'}}>
      <Navg.Screen name="BottomTab" component={BottomTab} />
    </Navg.Navigator>
  );
};
export default Drawer;
