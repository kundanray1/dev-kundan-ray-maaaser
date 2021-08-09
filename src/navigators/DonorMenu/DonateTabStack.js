import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as theme from "../../constants/theme";
//two tab screens
import DonateNow from "../../screens/Donor/Home/DonateNow/index";
import ScheduleDonation from "../../screens/Donor/Home/ScheduleDonation/index";
import { Host } from "react-native-portalize";

const DonateTab = createMaterialTopTabNavigator();

//Top tab screen for donate now and schedule donation screen
export default DonateTabStack = () => {
  return (
    <Host>
      <DonateTab.Navigator
        initialRouteName="Donate Now"
        tabBarOptions={{
          activeTintColor: theme.colors.primary2,
          inactiveTintColor: "#5F6062",
          style: {
            backgroundColor: theme.colors.white,
          },
          labelStyle: {
            fontSize: 16,
            fontWeight: "700",
            textTransform: "capitalize",
          },
          indicatorStyle: {
            borderBottomColor: theme.colors.primary2,
            borderBottomWidth: 3,
          },
        }}
      >
        <DonateTab.Screen name="Donate Now" component={DonateNow} />
        <DonateTab.Screen
          name="Schedule Donation"
          component={ScheduleDonation}
        />
      </DonateTab.Navigator>
    </Host>
  );
};
