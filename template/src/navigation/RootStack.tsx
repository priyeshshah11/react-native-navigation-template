import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './navigators/BottomTabs';
import DrawerNav from './navigators/DrawerNav';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Drawer" component={DrawerNav} />
      {/* <Stack.Screen name="Home" component={BottomTabs} /> */}
    </Stack.Navigator>
  );
};

export default RootStack;
