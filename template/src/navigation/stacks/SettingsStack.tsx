import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../../screens';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SettingsScreen" component={Screens.SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
