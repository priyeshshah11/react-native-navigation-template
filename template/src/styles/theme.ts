import { StyleSheet } from 'react-native';
import { FullTheme, ReplaceTheme, UpdateTheme } from 'react-native-elements';
import { RecursivePartial } from '../react-native-elements';

export type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info';

export type TextColorTypes = 'textPrimary' | 'textSecondary' | 'textTertiary';

export type ComponentSizes = 'small' | 'normal' | 'large';

export type UITheme = Partial<FullTheme>;

const theme: RecursivePartial<FullTheme> = {
  colors: {
    primary: '#6d27da',
    secondary: '#FF3366',
    white: '#ffffff',
    black: '#000000',
    grey0: '#393e42',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    greyOutline: '#bbb',
    searchBg: '#303337',
    info: '#e1e8ee',
    success: '#008000',
    error: '#cc0011',
    warning: '#ffa001',
    textPrimary: '#000000',
    textSecondary: '#495162',
    textTertiary: '#c1c5ca',
    disabled: '#e1e8ee',
    // Darker color if hairlineWidth is not thin enough
    divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
    background: '#ffffff',
    cardDefault: '#f6f6f6',
    cardSelected: '#ececec',
    darkOverlay: 'rgba(0,0,0,0.3)',
    lightOverlay: 'rgba(0,0,0,0.1)',
    shadowColor: '#000000',
  },
};

const darkTheme: RecursivePartial<FullTheme> = {
  colors: {
    primary: '#6d27da',
    secondary: '#FF3366',
    white: '#ffffff',
    black: '#000000',
    grey5: '#393e42',
    grey4: '#43484d',
    grey3: '#5e6977',
    grey2: '#86939e',
    grey1: '#bdc6cf',
    grey0: '#e1e8ee',
    greyOutline: '#bbb',
    searchBg: '#303337',
    info: '#161616',
    success: '#008000',
    error: '#cc0011',
    warning: '#ffa001',
    textPrimary: '#ffffff',
    textSecondary: '#dcdcdc',
    textTertiary: '#ddc7f6',
    disabled: 'hsl(208, 8%, 90%)',
    // Darker color if hairlineWidth is not thin enough
    divider: StyleSheet.hairlineWidth < 1 ? '#84838a' : 'rgba(0, 0, 0, 0.12)',
    background: '#000000',
    cardDefault: '#161616',
    cardSelected: '#333333',
    darkOverlay: 'rgba(0,0,0,0.3)',
    lightOverlay: 'rgba(0,0,0,0.1)',
    shadowColor: '#ffffff',
  },
};

export type ThemeProps = {
  theme: FullTheme;
  updateTheme: UpdateTheme;
  replaceTheme: ReplaceTheme;
};

export const navLightTheme = {
  dark: true,
  colors: {
    primary: '#481988',
    background: '#ffffff',
    card: '#f6f6f6',
    text: '#495162',
    border: '#481988',
    notification: '#481988',
  },
};

export const navDarkTheme = {
  dark: true,
  colors: {
    primary: '#481988',
    background: '#000000',
    card: '#161616',
    text: '#f6f6f6',
    border: '#481988',
    notification: '#481988',
  },
};

export { theme, darkTheme };
