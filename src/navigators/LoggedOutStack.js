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

import DonateTabStack from "./DonateTabStack";
import Confirmation from "../screens/home/Confirmation/index";
import ACH from "../screens/home/ACH/index";

import Bottom from "../screens/Bottom";

const AuthStack = createStackNavigator();
export default LoggedOutStack = () => {
  return (
      <AuthStack.Navigator initialRouteName="Welcome">
        <AuthStack.Screen
          name="Bottom"
          options={{ headerShown: true }}
          component={Bottom}
        /> 

        <AuthStack.Screen
          name="ACH"
          options={{ headerShown: true }}
          component={ACH}
        /> 
       
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
