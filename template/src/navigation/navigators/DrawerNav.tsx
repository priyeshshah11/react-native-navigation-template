import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Stacks from '../stacks';
import { withTheme } from 'react-native-elements';
import { ThemeProps } from '../../styles/theme';
import NavIcon from './NavIcon';

const Drawer = createDrawerNavigator();

type Props = ThemeProps;
const DrawerNav = (props: Props) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        drawerIcon: navProps => <NavIcon {...navProps} route={route} />,
        drawerActiveTintColor: props.theme.colors.primary,
        drawerInactiveTintColor: props.theme.colors.grey0,
      })}>
      <Drawer.Screen name="Home" component={Stacks.HomeStack} />
      <Drawer.Screen name="Settings" component={Stacks.SettingsStack} />
    </Drawer.Navigator>
  );
};

export default withTheme(DrawerNav, '');
