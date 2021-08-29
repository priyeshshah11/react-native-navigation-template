import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withTheme } from 'react-native-elements';
import { ThemeProps } from '../../styles/theme';
import * as Stacks from '../stacks';
import NavIcon from './NavIcon';

type Props = ThemeProps;

const BottomTabs = (props: Props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: navProps => <NavIcon {...navProps} route={route} />,
        tabBarActiveTintColor: props.theme.colors.primary,
        tabBarInactiveTintColor: props.theme.colors.grey0,
      })}>
      <Tab.Screen name="Home" component={Stacks.HomeStack} />
      <Tab.Screen name="Settings" component={Stacks.SettingsStack} />
    </Tab.Navigator>
  );
};

export default withTheme(BottomTabs, '');
