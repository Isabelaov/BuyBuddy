/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Navigator } from './src/navigation/navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  useEffect(() => {
    const delay = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <GestureHandlerRootView>
      <Navigator />
    </GestureHandlerRootView>
  );
}

export default App;
