import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as theme from "../../constants/theme";
//two tab screens
import SubCampaignDetails from "../../screens/Campaigns/SubCampaignDetails/index";
import SubCampaignDonors from "../../screens/Campaigns/SubCampaignDonors/index";
import SubCampaignComments from "../../screens/Campaigns/SubCampaignComments/index";
import SubCampaigns from "../../screens/Campaigns/SubCampaigns/index";

const SubCampaignTab = createMaterialTopTabNavigator();

export default SubCampaignTabStack=()=> {
  return (
    <SubCampaignTab.Navigator
        lazy
        swipeEnabled
      initialRouteName="Sub Campaign Details"
      tabBarOptions={{
        activeTintColor: theme.colors.primary2,
	      inactiveTintColor: "#5F6062",
        style: {
          backgroundColor: theme.colors.white,
        },
        tabStyle: {
         width: 'auto' 
     },
        labelStyle: {
          fontSize:16,
          fontWeight:"700",
          textTransform:'capitalize',
        },
        indicatorStyle: {
          borderBottomColor: theme.colors.primary2,
          borderBottomWidth: 3,
        },
      }}>
      <SubCampaignTab.Screen
        name="Sub Campaign Details"
        component={SubCampaignDetails}
        options={{ headerShown: true,title:'Details'}}
          />
      <SubCampaignTab.Screen
        name="Sub Campaign Donors"
        component={SubCampaignDonors}
        options={{ headerShown: true,title:'Donors'}}
        />
        <SubCampaignTab.Screen
        name="Sub Campaign Comments"
        component={SubCampaignComments}
        options={{ headerShown: true,title:'Comments'}}

        />
    </SubCampaignTab.Navigator>
  );
}
