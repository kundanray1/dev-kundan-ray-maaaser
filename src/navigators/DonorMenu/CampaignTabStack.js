import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as theme from "../../constants/theme";
//two tab screens
import CampaignDetails from "../../screens/Donor/Campaigns/CampaignDetails/index";
import CampaignDonors from "../../screens/Donor/Campaigns/CampaignDonors/index";
import CampaignComments from "../../screens/Donor/Campaigns/CampaignComments/index";
// import SubCampaigns from "../../screens/Donor/Campaigns/SubCampaigns/index";

const CampaignTab = createMaterialTopTabNavigator();

//Top tab screen for donate now and schedule donation screen
export default CampaignTabStack=()=> {
  return (
    <CampaignTab.Navigator
      initialRouteName="Campaign Details"
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
      <CampaignTab.Screen
        name="Campaign Details"
        component={CampaignDetails}
        options={{ headerShown: true,title:'Details'}}

          />
      <CampaignTab.Screen
        name="Donors"
        component={CampaignDonors}
        />

        <CampaignTab.Screen
        name="Comments"
        component={CampaignComments}
        />
        <CampaignTab.Screen
        name="Sub-campaigns"
        component={CampaignComments}
        />
        
    </CampaignTab.Navigator>
  );
}
