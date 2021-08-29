import React from 'react';
import { Text, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import {
  Button as RNEButton,
  ButtonProps,
  makeStyles,
  withTheme,
} from 'react-native-elements';
import { IconNode } from 'react-native-elements/dist/icons/Icon';
import { ColorTypes, ComponentSizes, UITheme } from '../../styles/theme';

type Props = Partial<ButtonProps> & {
  color?: ColorTypes;
  iconSize?: ComponentSizes | 'extraLarge';
  type?: 'solid' | 'outline' | 'clear';
  rounded?: boolean;
  shadow?: boolean;
  subTitle?: string;
  icon: IconNode;
  subtitleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const sizes: Record<string, number> = {
  extraLarge: 40,
  large: 32,
  medium: 28,
  small: 24,
};

const Iconbutton = (props: Props) => {
  const styles = useStyles(props);

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.outerContainer}>
      <RNEButton
        {...props}
        buttonStyle={[styles.typeStyle, styles.buttonStyle]}
        containerStyle={[
          styles.container,
          styles.shadowStyle,
          props.containerStyle,
        ]}
        loadingProps={{
          size: ['large', 'extraLarge'].includes(props.iconSize ?? '')
            ? 'large'
            : 'small',
          ...props.loadingProps,
        }}
        icon={React.cloneElement(props.icon, {
          color: styles.iconStyle.color,
          size: sizes[props.iconSize ?? 'medium'],
        })}
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
  const buttonSizes: Record<string, number> = {
    extraLarge: 70,
    large: 50,
    medium: 45,
    small: 40,
  };

  const buttonColor = theme.colors?.[props.color ?? 'primary'];

  let typeStyle;

  switch (props.type) {
    case 'outline':
      typeStyle = {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: buttonColor,
      };
      break;
    case 'clear':
      typeStyle = {
        backgroundColor: 'transparent',
      };
      break;
    default:
      typeStyle = {
        backgroundColor: buttonColor ?? theme.colors?.primary,
      };
  }

  return {
    outerContainer: {
      alignItems: 'center',
    },
    container: {
      borderRadius: props.rounded ? buttonSizes[props.iconSize ?? 'large'] : 0,
    },
    typeStyle: typeStyle,
    iconStyle: {
      color: ['outline', 'clear'].includes(props.type ?? '')
        ? buttonColor
        : 'white',
    },
    buttonStyle: {
      padding: 8,
      justifyContent: 'center',
      width: buttonSizes[props.iconSize ?? 'large'],
      height: buttonSizes[props.iconSize ?? 'large'],
      borderRadius: props.rounded ? buttonSizes[props.iconSize ?? 'large'] : 0,
    },

    shadowStyle: props.shadow
      ? {
          shadowColor: '#000',
          shadowOffset: { height: 10, width: 10 },
          shadowOpacity: 0.6,
          shadowRadius: 16,
          elevation: 24,
        }
      : {},

    subtitleStyle: {
      marginVertical: 4,
      textAlign: 'center',
      color: theme.colors?.textPrimary,
    },
  };
});

export default withTheme(Iconbutton, '');
