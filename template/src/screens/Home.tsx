import React from 'react';
import { View } from 'react-native';
import { Text, withTheme, makeStyles } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { UITheme, ThemeProps } from '../styles/theme';

type Props = ThemeProps;

const Home = (props: Props) => {
  const styles = useStyles(props);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Icon name="home" size={24} />
    </View>
  );
};

export default withTheme(Home, '');

const useStyles = makeStyles((theme: Partial<UITheme>) => {
  return {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
