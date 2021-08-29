import React from 'react';
import {
  Switch as RNESwitch,
  SwitchProps,
  makeStyles,
  withTheme,
} from 'react-native-elements';
import { dimensions } from '../../styles/constants';
import { ComponentSizes, UITheme } from '../../styles/theme';

type Props = SwitchProps & {
  size?: ComponentSizes;
};

const Switch = (props: Props) => {
  const styles = useStyles(props);
  return <RNESwitch style={styles.switchStyle} {...props} />;
};

const useStyles = makeStyles((theme: UITheme, props: Props) => {
  return {
    switchStyle: {
      transform: [
        { scaleX: dimensions[props.size ?? 'normal'] },
        { scaleY: dimensions[props.size ?? 'normal'] },
      ],
    },
  };
});

export default withTheme(Switch, '');
