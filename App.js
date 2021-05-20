import React, { useState } from "react";
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import store  from './src/store/ConfigureStore'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigation from "./src/navigators/Index.js";
import FlashMessage from "react-native-flash-message";
export default function App() {
  return (
       <SafeAreaProvider style={{ backgroundColor: "black" }}>
            <StatusBar barStyle="light-content"  translucent={true} />
            <Provider store={store}>
               <Navigation />
               <FlashMessage
        position="top"
        icon={{ icon: "auto", position: "right" }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          top: StatusBar.currentHeight
        }}
      />
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
