import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../../screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={Screens.Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
