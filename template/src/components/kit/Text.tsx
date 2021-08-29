import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { makeStyles, withTheme } from 'react-native-elements';
import { fontSizes } from '../../styles/constants';
import { ColorTypes, ComponentSizes, UITheme } from '../../styles/theme';

type Props = TextProps & {
  size?: ComponentSizes | 'extraSmall' | 'extraLarge' | 'jumbo' | 'extraJumbo';
  fontStyle?: 'normal' | 'italic';
  weight?: 'bold' | 'extraBold';
  color?: ColorTypes | 'textPrimary' | 'textSecondary' | 'textTertiary';
};

const Text = (props: Props) => {
  const styles = useStyles(props);
  return <RNText {...props} style={[styles.textStyle, props.style]} />;
};

const useStyles = makeStyles((theme: UITheme, props: Props) => {
  let fWeight: 'normal' | 'bold' | '900' = 'normal';
  switch (props.weight) {
    case 'extraBold':
      fWeight = '900';
      break;
    case 'bold':
      fWeight = 'bold';
      break;
    default:
      break;
  }

  return {
    textStyle: {
      color: theme.colors?.[props.color ?? 'textPrimary'],
      fontSize: fontSizes[props.size ?? 'normal'],
      fontStyle: props.fontStyle ?? 'normal',
      fontWeight: fWeight,
    },
  };
});

export default withTheme(Text, '');
