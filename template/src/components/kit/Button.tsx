import React from 'react';
import {
  Button as RNEButton,
  ButtonProps,
  makeStyles,
  withTheme,
} from 'react-native-elements';
import { colors, fontSizes } from '../../styles/constants';
import { ColorTypes, ComponentSizes, UITheme } from '../../styles/theme';

type Props = Partial<ButtonProps> & {
  color?: ColorTypes | 'primaryDark';
  buttonSize?: ComponentSizes | 'extraLarge';
  widthSize?: 'half' | 'full' | 'content';
  type?: 'solid' | 'outline' | 'clear';
  rounded?: boolean;
  shadow?: boolean;
};

const Button = (props: Props) => {
  const styles = useStyles(props);

  return (
    <RNEButton
      {...props}
      buttonStyle={[styles.typeStyle, styles.buttonStyle, props.buttonStyle]}
      titleStyle={styles.titleStyle}
      containerStyle={[
        styles.container,
        styles.shadowStyle,
        props.containerStyle,
      ]}
    />
  );
};

const useStyles = makeStyles((theme: UITheme, props: Props) => {
  const buttonColor = colors[props.color ?? 'primary'];

  let typeStyle;

  const widths: Record<string, string> = {
    full: '100%',
    half: '40%',
    content: 'auto',
  };

  const buttonSizes: Record<string, number> = {
    extraLarge: 56,
    large: 48,
    medium: 40,
    small: 36,
  };

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
        backgroundColor: buttonColor ?? colors.primary,
      };
  }

  return {
    container: {
      width: widths[props.widthSize ?? 'full'],
      borderRadius: props.rounded ? 25 : 0,
    },
    typeStyle: typeStyle,
    titleStyle: {
      color: ['outline', 'clear'].includes(props.type ?? '')
        ? buttonColor
        : 'white',
      fontSize: fontSizes[props.buttonSize ?? 'large'],
    },
    buttonStyle: {
      paddingHorizontal: 16,
      height: buttonSizes[props.buttonSize ?? 'large'],
      justifyContent: 'center',
      borderRadius: props.rounded ? 25 : 0,
    },
    shadowStyle: props.shadow
      ? {
          shadowColor: '#000',
          shadowOffset: { height: 10, width: 10 },
          shadowOpacity: 0.6,
          shadowRadius: 16,
          elevation: 10,
        }
      : {},
  };
});

export default withTheme(Button, '');
