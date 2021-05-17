import React, { useState } from "react";
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import store  from './src/store/ConfigureStore'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigation from "./src/navigators/Index.js";
export default function App() {
  return (
       <SafeAreaProvider style={{ backgroundColor: "black" }}>
            <StatusBar barStyle="light-content"  translucent={true} />
            <Provider store={store}>
               <Navigation />
            </Provider>
        </SafeAreaProvider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
