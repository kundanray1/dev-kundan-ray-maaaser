
import * as React from 'react';
import {StatusBar}  from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as theme from "../../constants/theme";
//two tab screens
import CampaignDetails from "../../screens/Campaigns/CampaignDetails/index";
import CampaignDonors from "../../screens/Campaigns/CampaignDonors/index";
import CampaignComments from "../../screens/Campaigns/CampaignComments/index";
import CampaignSubCampaign from "../../screens/Campaigns/CampaignSubCampaign/index";

const CampaignSubCampaignTab = createMaterialTopTabNavigator();
export default CampaignSubCampaignTabStack=()=> {
  return (
    <CampaignSubCampaignTab.Navigator
        lazy
        swipeEnabled
      	initialRouteName="Campaign Details"
      	tabBarOptions={{
        activeTintColor: theme.colors.primary2,
	      inactiveTintColor: "#5F6062",
        style: {
          backgroundColor: theme.colors.white,
        },
        tabStyle:{
        	width:"auto"
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
      <CampaignSubCampaignTab.Screen
        name="Campaign Details"
        component={CampaignDetails}
        options={{ headerShown: true,title:'Details'}}
          />
      <CampaignSubCampaignTab.Screen
        name="Campaign Donors"
        component={CampaignDonors}
        options={{ headerShown: true,title:'Donors'}}
        />
        <CampaignSubCampaignTab.Screen
        name="Campaign Comments"
        component={CampaignComments}
        options={{ headerShown: true,title:'Comments'}}
        />
        <CampaignSubCampaignTab.Screen
        name="Campaign Sub Campaigns"
        component={CampaignSubCampaign}
        options={{ headerShown: true,title:'Sub-Campaigns'}}
        />
        
    </CampaignSubCampaignTab.Navigator>
  );
}
