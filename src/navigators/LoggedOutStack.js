import React, { useState, useEffect } from "react";
import {StatusBar} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

//auth
import Welcome from "../screens/auth/Welcome/index";
import Login from "../screens/auth/Login/index";
import SignUp from "../screens/auth/SignUp/index";
import ForgotPassword from "../screens/auth/ForgotPassword/index";
import Verification from "../screens/auth/Verification/index";
import CreateNewPassword from "../screens/auth/CreateNewPassword/index";

const AuthStack = createStackNavigator();
export default LoggedOutStack = () => {
  return (
      <AuthStack.Navigator initialRouteName="Login">

         <AuthStack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <AuthStack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <AuthStack.Screen
          name="Sign Up"
          options={{ headerShown: false }}
          component={SignUp}
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
