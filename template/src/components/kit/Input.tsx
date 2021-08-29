import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Animated, TextInput, View } from 'react-native';
import { makeStyles, withTheme } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { typeStyles, iconSize } from '../../styles/constants';
import { Shadow } from 'react-native-shadow-2';
import { UITheme } from '../../styles/theme';

type Props = {
  multiline?: boolean;
  autoFocus?: boolean;
  hasBorder?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  success?: boolean;
  error?: boolean;
  label?: string;
  value?: string;
  keyboardType?: string;
  placeholder?: string;
  hasIcon?: boolean;
  iconName?: string;
  iconType?: 'solid' | 'outline';
  theme?: object;
  style?: object;
};
const Input: React.FC<Props> = props => {
  const [value, setValue] = useState<string>('');
  const [size, setSize] = useState<number>(typeStyles.fontSizeLarge);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const anim = useRef(new Animated.Value(0)).current;
  const iconName: string = props.iconName || 'square';
  const styles = useStyles(props);
  const multiline: boolean = props.multiline || false;
  const placeholder: string = useMemo(
    () => props.placeholder ?? '',
    [props.placeholder],
  );
  const isEmpty: boolean = useMemo(
    () => value === '' && placeholder === '' && !isFocused,
    [value, placeholder, isFocused],
  );

  const onFocus = () => {
    setIsFocused(true);
    setSize(typeStyles.fontSizeSmall);
    Animated.timing(anim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const onBlur = () => {
    setIsFocused(false);
    setSize(isEmpty ? typeStyles.fontSizeLarge : typeStyles.fontSizeSmall);
    Animated.timing(anim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const animY: Animated.AnimatedInterpolation = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [isEmpty ? -4 : -13, -13],
  });

  const Label: React.FC = () => {
    const label: string = props.label || 'Enter Something';
    return (
      <Animated.Text
        style={{
          ...styles.label,
          fontSize: multiline ? 16 : size,
          transform: [{ translateY: multiline ? 0 : animY }],
        }}>
        {label}
      </Animated.Text>
    );
  };
  const Icon: React.FC = () => {
    if (!props.hasIcon) {
      return null;
    }
    return (
      <Ionicons
        name={iconName}
        style={styles.iconContainer}
        size={iconSize.large}
      />
    );
  };
  const InfoIcon: React.FC = () => {
    if (!props.error && !props.success) {
      return null;
    }
    const infoIconName: string = props.error
      ? 'alert-circle-outline'
      : 'checkmark-circle-outline';
    return (
      <Ionicons
        name={infoIconName}
        style={styles.infoIconContainer}
        size={iconSize.large}
      />
    );
  };
  useEffect(() => {
    setSize(isEmpty ? typeStyles.fontSizeLarge : typeStyles.fontSizeSmall);
  }, [isEmpty]);
  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return (
    <Shadow
      distance={props.shadow ? 8 : 0}
      startColor={'#d9d9d9'}
      radius={props.rounded ? 30 : 4}
      containerViewStyle={{ ...props.style, ...styles.shadowContainer }}>
      <View style={styles.container}>
        <View>
          <View style={styles.icon}>
            <Icon />
          </View>
        </View>
        <View style={styles.rightPart}>
          <Label />
          <TextInput
            style={styles.textInput}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={e => setValue(e)}
            editable={!(props.disabled || props.readOnly)}
            value={value}
            placeholder={placeholder}
            autoFocus={props.autoFocus}
            multiline={multiline}
            numberOfLines={4}
            blurOnSubmit={true}
          />
        </View>
        <View style={styles.infoIcon}>
          <InfoIcon />
        </View>
      </View>
    </Shadow>
  );
};

const useStyles = makeStyles((theme: UITheme, props: Props) => {
  let borderSize: number = props.hasBorder ? 2 : 0,
    iconColor: string | undefined = theme.colors?.primary,
    iconBgColor: string | undefined = theme.colors?.white,
    infoColor: string | undefined = theme.colors?.primary,
    borderRadius: number = props.rounded ? 30 : 4,
    multiline: boolean = props.multiline || false;

  if (props.iconType === 'solid') {
    iconBgColor = theme.colors?.primary;
    iconColor = theme.colors?.white;
  }
  if (props.disabled) {
    iconBgColor =
      props.iconType === 'solid' ? theme.colors?.grey3 : theme.colors?.white;
  }
  if (props.error || props.success) {
    infoColor = props.error ? theme.colors?.error : theme.colors?.success;
  }
  return {
    shadowContainer: {
      marginVertical: 8,
    },
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors?.white,
      height: multiline ? 160 : 56,
      width: '100%',
      overflow: 'hidden',
      borderWidth: borderSize,
      borderColor: infoColor,
      borderRadius: borderRadius,
    },
    iconContainer: {
      color: iconColor,
    },
    icon: {
      paddingHorizontal: 16,
      height: '100%',
      justifyContent: 'center',
      backgroundColor: iconBgColor,
    },
    rightPart: {
      flex: 1,
      justifyContent: multiline ? 'flex-start' : 'center',
    },
    label: {
      position: multiline ? 'relative' : 'absolute',
      elevation: 2,
      shadowColor: 'transparent',
      paddingHorizontal: 4,
      opacity: 1,
      color: theme.colors?.primary,
      top: multiline ? 8 : 18,
    },
    textInput: {
      fontSize: typeStyles.fontSizeLarge,
      top: 8,
      color: theme.colors?.black,
      textAlignVertical: multiline ? 'top' : 'center',
    },
    infoIconContainer: {
      color: infoColor,
    },
    infoIcon: {
      paddingHorizontal: 16,
      justifyContent: 'center',
    },
  };
});
export default withTheme(Input, '');
