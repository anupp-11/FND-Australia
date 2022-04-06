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
  
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
    return (
      <SafeAreaProvider>
        <Navigation  />
        <StatusBar />
      </SafeAreaProvider>
    );
}
