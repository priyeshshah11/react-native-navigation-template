import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Root from './navigation/Root';
import { theme, darkTheme } from './styles/theme';

const App = () => {
  const deviceTheme = useColorScheme();
  const darkMode = deviceTheme === 'dark';
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : theme} useDark={darkMode}>
        <Root />
      </ThemeProvider>
    </>
  );
};

export default App;
