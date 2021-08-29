import { RouteProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type NavIconProps = {
  focused: boolean;
  color: string;
  size: number;
  route: RouteProp<ParamListBase, string>;
};
const NavIcon = (props: NavIconProps) => {
  const { focused, color, size, route } = props;
  console.log(route);
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Settings':
      iconName = 'settings';
      break;
    default:
      iconName = 'home';
      break;
  }
  return <Icon name={iconName} size={24} color={color} />;
};

export default NavIcon;
