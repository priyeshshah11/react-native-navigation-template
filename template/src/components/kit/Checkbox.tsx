import React from 'react';
import {
  CheckBox as RNECheckbox,
  CheckBoxProps,
  makeStyles,
  withTheme,
} from 'react-native-elements';
import { fontSizes } from '../../styles/constants';
import { ColorTypes, ComponentSizes, UITheme } from '../../styles/theme';

type Props = CheckBoxProps & {
  color?: ColorTypes;
  checkBoxSize?: ComponentSizes;
};

const checkBoxSizes: Record<string, number> = {
  small: 24,
  normal: 30,
  large: 48,
};

const CheckBox = (props: Props) => {
  const styles = useStyles(props);
  return (
    <RNECheckbox
      // {...props}
      size={checkBoxSizes[props.checkBoxSize ?? 'small']}
      textStyle={[props.textStyle, styles.textStyle]}
      checkedColor={styles.checkedStyle.color}
    />
  );
};

const useStyles = makeStyles((theme: UITheme, props: Props) => {
  return {
    textStyle: {
      color:
        props.color === 'error'
          ? theme.colors?.error
          : theme.colors?.textPrimary,
      fontSize: fontSizes[props.checkBoxSize ?? 'normal'],
    },

    checkedStyle: {
      color: theme.colors?.[props.color ?? 'primary'],
    },
  };
});

export default withTheme(CheckBox, '');
