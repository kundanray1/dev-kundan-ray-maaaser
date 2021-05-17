import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as theme from "../constants/theme.js";
import LoggedInStack from './LoggedInStack';
import LoggedOutStack from './LoggedOutStack';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { authStart } from "./../store/actions/AuthActions";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#068DD3",
    background: theme.colors.white,
  },
};


const App = ({data}) => {
  return (
    <NavigationContainer theme={MyTheme}>
        {(data.isLoggedIn && data.user)?<LoggedInStack/>:<LoggedOutStack/>}
      <OfflineNotice/>
    </NavigationContainer>
  );
};


const structuredSelector = createStructuredSelector({
  data: (state) => state.login,
});

export default connect(structuredSelector)(App);
