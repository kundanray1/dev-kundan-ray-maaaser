// React Native ScanQRCodeTab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as theme from "../../constants/theme";

//two tab screens
import ScanQR from "../../screens/Donor/Home/ScanQR/index";
import UploadQR from "../../screens/Donor/Home/UploadQR/index";

const ScanQRCodeTab = createMaterialTopTabNavigator();

//Top tab screen for donate now and schedule donation screen
export default ScanQRCodeTabStack=()=> {
  return (
    <ScanQRCodeTab.Navigator
      initialRouteName="Scan QR"
      tabBarOptions={{
        activeTintColor: theme.colors.primary2,
	     inactiveTintColor: "#5F6062",
        style: {
          backgroundColor: theme.colors.white,
        },
        labelStyle: {
          fontSize:16,
          fontWeight:"700",
          textTransform:"capitalize",
        },
        indicatorStyle: {
          borderBottomColor: theme.colors.primary2,
          borderBottomWidth: 3,
        },
      }}>
      <ScanQRCodeTab.Screen
        name="Scan QR"
        component={ScanQR}
          />
      <ScanQRCodeTab.Screen
        name="Upload QR"
        component={UploadQR}
        />
    </ScanQRCodeTab.Navigator>
  );
}
