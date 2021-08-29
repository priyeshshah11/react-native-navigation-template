import React from 'react';
import { withTheme } from 'react-native-elements';
import { SafeAreaView, ViewProps, StyleSheet, ScrollView } from 'react-native';

type BaseViewProps = ViewProps & {
  theme?: any;
  scrollable?: boolean;
  safeAreaView?: boolean;
};

const BaseView: React.FC<BaseViewProps> = props => {
  const { scrollable, safeAreaView } = props;

  const Scrollview = (
    scrollable ? 'ScrollView' : ''
  ) as keyof JSX.IntrinsicElements;

  const SafeAreaview = (
    safeAreaView ? 'SafeAreaView' : ''
  ) as keyof JSX.IntrinsicElements;

  return (
    <>
      <Scrollview style={styles.paddedContainer}>
        <SafeAreaview style={styles.safeContainer}>
          {props.children}
        </SafeAreaview>
      </Scrollview>
    </>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  paddedContainer: {
    padding: 12,
  },
  keyboardContainer: {
    flex: 1,
    width: '100%',
  },
});

export default withTheme(BaseView, '');
