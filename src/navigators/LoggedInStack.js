import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReduxDemo from "../screens/auth/ReduxDemo";
import AddNotification from "../screens/auth/AddNotification";

const AuthStack = createStackNavigator();
export default LoggedInStack = () => {
  return (
      <AuthStack.Navigator initialRouteName="Redux Demo">
         <AuthStack.Screen
          name="Redux Demo"
          options={{ headerShown: true }}
          component={ReduxDemo}
        />
        <AuthStack.Screen
          name="Add Notification"
          options={{ headerShown: true }}
          component={AddNotification}
        />
      </AuthStack.Navigator>
  );
};
