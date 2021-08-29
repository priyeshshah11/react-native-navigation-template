import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  Badge as RNEBadge,
  BadgeProps,
  makeStyles,
  withTheme,
} from 'react-native-elements';
import { colors, dimensions } from '../../styles/constants';
import { ColorTypes, ComponentSizes, UITheme } from '../../styles/theme';

type Props = BadgeProps & {
  color?: ColorTypes;
  style?: 'outline' | 'solid';
  size?: ComponentSizes;
};

const Badge = (props: Props) => {
  const styles = useStyles(props);
  return (
    <RNEBadge
      {...props}
      textStyle={[props.textStyle, styles.textStyle as StyleProp<ViewStyle>]}
      badgeStyle={[props.badgeStyle, styles.badgeStyle, styles.badgeSize]}
    />
  );
};

const useStyles = makeStyles((theme: UITheme, props: Props) => {
  return {
    badgeStyle:
      props.style === 'outline'
        ? {
            backgroundColor: theme.colors?.white,
            borderWidth: 1,
            borderColor: colors[props.color ?? 'primary'],
          }
        : {
            backgroundColor: colors[props.color ?? 'primary'],
          },

    badgeSize: {
      transform: [
        { scaleX: dimensions[props.size ?? 'normal'] },
        { scaleY: dimensions[props.size ?? 'normal'] },
      ],
    },
    textStyle: {
      color:
        props.style === 'outline'
          ? colors[props.color ?? 'primary']
          : theme.colors?.white,
    },
  };
});

export default withTheme(Badge, '');
