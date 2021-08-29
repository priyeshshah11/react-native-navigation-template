import React from 'react';
import {
  Chip as RNEChip,
  ChipProps,
  makeStyles,
  withTheme,
} from 'react-native-elements';
import { colors, dimensions } from '../../styles/constants';
import { ColorTypes, ComponentSizes, UITheme } from '../../styles/theme';

type Props = ChipProps & {
  color?: ColorTypes;
  size?: ComponentSizes;
};

const Chip = (props: Props) => {
  const styles = useStyles(props);
  return (
    <RNEChip
      {...props}
      buttonStyle={[props.buttonStyle, styles.chipStyle]}
      titleStyle={[props.titleStyle, styles.textStyle]}
      containerStyle={[props.containerStyle, styles.chipSize]}
    />
  );
};

const useStyles = makeStyles((theme: UITheme, props: Props) => {
  return {
    chipStyle:
      props.type === 'outline'
        ? {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: colors[props.color ?? 'primary'],
          }
        : {
            backgroundColor: colors[props.color ?? 'primary'],
          },

    chipSize: {
      transform: [
        { scaleX: dimensions[props.size ?? 'normal'] },
        { scaleY: dimensions[props.size ?? 'normal'] },
      ],
    },

    textStyle: {
      color:
        props.type === 'outline' ? colors[props.color ?? 'primary'] : 'white',
    },
  };
});

export default withTheme(Chip, '');
