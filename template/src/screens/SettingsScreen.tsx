import React from 'react';
import { View } from 'react-native';
import { Text, withTheme, makeStyles } from 'react-native-elements';
import { UITheme, ThemeProps } from '../styles/theme';

type Props = ThemeProps;

const SettingsScreen = (props: Props) => {
  const styles = useStyles(props);

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default withTheme(SettingsScreen, '');

const useStyles = makeStyles((theme: Partial<UITheme>) => {
  return {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
