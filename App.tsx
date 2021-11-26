import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Expo Font module 
import * as Font from "expo-font";
// import useFonts hook  
import { useFonts } from "@use-expo/font";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!fontsLoaded ) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation  />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
