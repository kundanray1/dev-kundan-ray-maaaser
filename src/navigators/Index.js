import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as theme from "../constants/theme.js";
import Welcome from "../screens/auth/Welcome";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Verification from "../screens/auth/Verification";
import CreateNewPassword from "../screens/auth/CreateNewPassword";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#068DD3",
    background: theme.colors.white,
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
          component={ForgotPassword}
        />
         <Stack.Screen
          name="Verification"
          options={{ headerShown: true }}
          component={Verification}
        />
         <Stack.Screen
          name="Create New Password"
          options={{ headerShown: true }}
          component={CreateNewPassword}
        />
      </Stack.Navigator>
      <OfflineNotice/>
    </NavigationContainer>
  );
};
