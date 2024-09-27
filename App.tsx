/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Host } from 'react-native-portalize';
import NoticeProvider from 'components/notice.component';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaProvider>
      <Host>
        <NoticeProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </NoticeProvider>
      </Host>
    </SafeAreaProvider>
  );
}

export default App;
