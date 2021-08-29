import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Animated, StatusBar, useColorScheme } from 'react-native';
import { navigationRef } from './RootNavigation';
import { navDarkTheme, navLightTheme } from '../styles/theme';
import RootStack from './RootStack';

const Root = () => {
  const renderApp = () => {
    // App component
    return <RootStack />;
  };

  const renderLoading = () => {
    // Loading component
  };

  const deviceTheme = useColorScheme();
  const darkMode = deviceTheme === 'dark';
  const navTheme = darkMode ? navDarkTheme : navLightTheme;
  const statusBarStyle = darkMode ? 'light-content' : 'dark-content';

  return (
    <NavigationContainer ref={navigationRef} theme={navTheme}>
      <StatusBar barStyle={statusBarStyle} />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Animated.View style={{ flex: 1 }}>
        {/* Condition to render App and Loading components */}
        {renderApp()}
      </Animated.View>
    </NavigationContainer>
  );
};

export default Root;
