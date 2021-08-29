import React from 'react';
import { TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import {
  Avatar as RNEAvatar,
  AvatarProps,
  makeStyles,
  withTheme,
} from 'react-native-elements';
import { colors } from '../../styles/constants';
import { ColorTypes, UITheme } from '../../styles/theme';
import Text from './Text';

type Props = AvatarProps & {
  shadow?: boolean;
  bgColor?: ColorTypes;
  subTitle?: string;
  subtitleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const Avatar = (props: Props) => {
  const styles = useStyles(props);
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}>
      <RNEAvatar
        {...props}
        containerStyle={[styles.bgStyle, styles.boxShadow]}
      />
      {props.subTitle && (
        <Text style={[styles.subtitleStyle, props.subtitleStyle]}>
          {props.subTitle}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const useStyles = makeStyles((theme: UITheme, props: Props) => {
  return {
    container: {
      alignItems: 'center',
    },
    bgStyle: {
      backgroundColor: colors[props.bgColor ?? 'primary'],
    },
    subtitleStyle: {
      marginVertical: 4,
      textAlign: 'center',
      color: theme.colors?.black,
    },
    boxShadow: props.shadow
      ? {
          borderWidth: 0.01,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 10,
        }
      : {},
  };
});

export default withTheme(Avatar, '');
