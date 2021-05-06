import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as theme from "../constants/theme.js";

import Welcome from "../screens/auth/Welcome";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Forgot from "../screens/auth/Forgot";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.maroon,
    background: theme.colors.gray2,
  },
};

const Stack = createStackNavigator();
export default App = () => {
  
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Welcome">
        
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: true }}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: true }}
          component={Register}
        />
        <Stack.Screen
          name="Forgot Password"
          options={{ headerShown: true }}
          component={Forgot}
        />
        
      </Stack.Navigator>
      <OfflineNotice/>
      
    </NavigationContainer>
  );
};
