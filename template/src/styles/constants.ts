import {Dimensions, LayoutAnimation, Platform, StatusBar} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {theme} from './theme';

const fonts = require('../../assets/fonts/selection.json');
export const Icomoon = createIconSetFromIcoMoon(fonts);

const IPHONE_X_HEIGHT = 812;
const IPHONE_X_MAX_HEIGHT = 896;
// const TABLET_PANEL_WIDTH = 325;
const IPHONE_12_MINI = 780;
const IPHONE_12 = 844;
const IPHONE_12_MAX = 926;

export function isIphoneX() {
  const dimen = Dimensions.get('screen');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === IPHONE_12_MINI ||
      dimen.width === IPHONE_12_MINI ||
      dimen.height === IPHONE_X_HEIGHT ||
      dimen.width === IPHONE_X_HEIGHT ||
      dimen.height === IPHONE_12 ||
      dimen.width === IPHONE_12 ||
      dimen.height === IPHONE_X_MAX_HEIGHT ||
      dimen.width === IPHONE_X_MAX_HEIGHT ||
      dimen.height === IPHONE_12_MAX ||
      dimen.width === IPHONE_12_MAX)
  );
}

export function isIphoneXROrXSMax() {
  // Major hack only used in action button
  // due to <SafeAreaView/> not working.
  // Updating react native will probably fix this issue.
  const dimen = Dimensions.get('screen');
  return (
    (Platform.OS === 'ios' &&
      !(Platform as any).isPad && // Out of date types
      !(Platform as any).isTVOS && // Out of date types
      dimen.height === IPHONE_X_MAX_HEIGHT) ||
    dimen.width === IPHONE_X_MAX_HEIGHT
  );
}

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios'
    ? isIphoneX()
      ? 30
      : isIphoneXROrXSMax()
      ? 40
      : 20
    : StatusBar.currentHeight || 0;

export const isSmallScreen = () => {
  const dimen = Dimensions.get('screen');
  return dimen.width < 375;
};

export function getModalHeight() {
  return Dimensions.get('screen').height - (StatusBar.currentHeight || 0 + 40);
}

export const colors: Record<string, string | undefined> = {
  primaryDark: theme.colors?.primaryDark,
  primary: theme.colors?.primary,
  secondary: theme.colors?.secondary,
  info: theme.colors?.info,
  error: theme.colors?.error,
  success: theme.colors?.success,
  warning: theme.colors?.warning,
};

export const fontSizes: Record<string, number> = {
  extraJumbo: 40,
  jumbo: 30,
  extraLarge: 24,
  large: 20,
  normal: 16,
  small: 12,
  extraSmall: 10,
};

export const typeStyles = {
  fontMedium: 'Medium',
  fontBold: 'SemiBold',
  fontExtraBold: 'Bold',
  fontSizeExtraJumbo: 40,
  fontSizeJumbo: 30,
  fontSizeExtraLarge: 24,
  fontSizeLarge: 20,
  fontSizeNormal: 16,
  fontSizeSmall: 12,
  fontSizeExtraSmall: 10,
};

export const dimensions: Record<string, number> = {
  small: 1,
  normal: 1.5,
  large: 2,
};

export const iconSize = {
  extraSmall: 12,
  small: 20,
  normal: 24,
  large: 30,
  extraLarge: 36,
};

export const LAYOUT_ANIMATION = {
  duration: 400,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.8,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.8,
  },
};

export const defaultTheme = 'lightTheme';

export default {
  upgradeButtonWidth: 155,
  APPBAR_HEIGHT: Platform.OS === 'ios' ? 44 : 56,
  STATUSBAR_HEIGHT,
  SWIPE_LIST_OPEN_VALUE: 120,
  Icomoon,
  LAYOUT_ANIMATION,
};
