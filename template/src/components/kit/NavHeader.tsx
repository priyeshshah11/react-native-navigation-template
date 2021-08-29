import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { makeStyles, withTheme } from 'react-native-elements';
import { IconNode } from 'react-native-elements/dist/icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeProps, UITheme } from '../../styles/theme';

type Props = {
  onBackPress?: () => void;
  title: string;
  rightIcon?: IconNode;
  backgroundColor?: string;
  textColor?: string;
} & ThemeProps;

const NavHeader = (props: Props) => {
  const navigation = useNavigation();
  const defbackHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    const backAction = () => {
      props.onBackPress ? props.onBackPress() : defbackHandler();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [defbackHandler, props]);

  const styles = useStyles(props);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <Icon
        name="chevron-left"
        size={40}
        color={props.textColor ?? props.theme.colors?.primary}
        style={styles.iconStyle}
        onPress={props.onBackPress ?? defbackHandler}
      />
      <View style={[styles.iconStyle, styles.rightIconStyle]}>
        {props.rightIcon}
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme: UITheme, props: Props) => {
  const textColor = props.textColor ?? theme.colors?.primary;

  return {
    container: {
      flexDirection: 'row',
      height: 56,
      alignItems: 'center',
      backgroundColor: props.backgroundColor ?? 'white',
    },

    iconStyle: {
      position: 'absolute',
    },

    rightIconStyle: {
      right: 0,
    },

    text: {
      flex: 1,
      fontSize: 20,
      color: textColor,
      textAlign: 'center',
    },

    titleContainer: {
      marginVertical: 12,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  };
});

export default withTheme(NavHeader, '');
