import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/auth/Welcome";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Verification from "../screens/auth/Verification";
import CreateNewPassword from "../screens/auth/CreateNewPassword";

const AuthStack = createStackNavigator();
export default LoggedOutStack = () => {
  return (
      <AuthStack.Navigator initialRouteName="Welcome">
        <AuthStack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <AuthStack.Screen
          name="Login"
          options={{ headerShown: true }}
          component={Login}
        />
        <AuthStack.Screen
          name="Register"
          options={{ headerShown: true }}
          component={Register}
        />
        <AuthStack.Screen
          name="Forgot Password"
          options={{ headerShown: true }}
          component={ForgotPassword}
        />
         <AuthStack.Screen
          name="Verification"
          options={{ headerShown: true }}
          component={Verification}
        />
         <AuthStack.Screen
          name="Create New Password"
          options={{ headerShown: true }}
          component={CreateNewPassword}
        />
         
      </AuthStack.Navigator>
  );
};
