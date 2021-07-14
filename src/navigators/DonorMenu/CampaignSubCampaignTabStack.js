import * as React from 'react';
import {StatusBar}  from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as theme from "../../constants/theme";
//two tab screens
import Campaigns from "../../screens/Campaigns/index";
import SubCampaigns from "../../screens/Campaigns/SubCampaigns/index";


const CampaignSubCampaignTab = createMaterialTopTabNavigator();

export default CampaignSubCampaignTabStack=()=> {
  return (
    <CampaignSubCampaignTab.Navigator
        lazy
        swipeEnabled
      	initialRouteName="Campaigns"
     	tabBarOptions={{
        activeTintColor: theme.colors.primary2,
	      inactiveTintColor: "#5F6062",
        style: {
          backgroundColor: theme.colors.white,
          top:StatusBar.currentHeight,
        },

        labelStyle: {
          fontSize:18,
          fontWeight:"700",
          textTransform:'capitalize',
        },
        indicatorStyle: {
          borderBottomColor: theme.colors.primary2,
          borderBottomWidth: 3,
        },
      }}>
      <CampaignSubCampaignTab.Screen
        name="Campaigns"
        component={Campaigns}
        options={{ headerShown: true,title:'My Campaigns'}}
          />
      <CampaignSubCampaignTab.Screen
        name="Sub Campaigns"
        component={SubCampaigns}
        options={{ headerShown: true,title:'My Sub-Campaigns'}}
        />
        
    </CampaignSubCampaignTab.Navigator>
  );
}
