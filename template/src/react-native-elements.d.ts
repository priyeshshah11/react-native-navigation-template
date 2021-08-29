import { StyleProp, TextStyle } from 'react-native';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements/dist/config/colors' {
  export interface TextProps {
    p1Style: StyleProp<TextStyle>;
  }

  export interface Colors {
    info: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    background: string;
    cardDefault: string;
    cardSelected: string;
    darkOverlay: string;
    lightOverlay: string;
    shadowColor: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
    text: Partial<TextProps>;
  }
}
