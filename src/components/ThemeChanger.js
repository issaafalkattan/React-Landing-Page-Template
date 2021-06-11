import React from 'react';
import { useState } from 'react';
import Splash from './SplashScreen';
import { ThemeProvider } from 'styled-components';

const LightTheme = {
  pageBackground: 'white',
  titleColor: '#dc658b',
  tagLineColor: 'black'
};

const DarkTheme = {
  pageBackground: '#282c36',
  titleColor: 'lightpink',
  tagLineColor: 'lavender'
};

const themes = {
  light: LightTheme,
  dark: DarkTheme
};

function ThemeChanger() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default ThemeChanger;
