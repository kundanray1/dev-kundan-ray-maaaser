import React from "react";
import {Button} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import ReceiverDashboard from "../../screens/Receiver/Home/ReceiverDashboard/index";
import ReceiverProfile from "../../screens/Receiver/ReceiverProfile/index";

import More from "../../screens/Donor/More/index";
import Campaigns from "../../screens/Campaigns/index";
import CampaignSubCampaignTabStack from "./../DonorMenu/CampaignSubCampaignTabStack";
import Community from "../../screens/Receiver/Community/index";


import CampaignBottomMenuIconComponent from "./../../assets/icons/campaignBottomMenuIconComponent.js";
import EmptyCampaignsIconComponent from "./../../assets/icons/emptyCampaignsIconComponent.js";

import ActiveHomeIconComponent from "./../../assets/icons/ActiveHomeIconComponent.js";
import ActiveProfileIconComponent from "./../../assets/icons/ActiveProfileIconComponent.js";
import ActiveMoreIconComponent from "./../../assets/icons/ActiveMoreIconComponent.js";
import ActiveTransactionsIconComponent from "./../../assets/icons/ActiveTransactionsIconComponent.js";
import ActiveCommunityIconComponent from "./../../assets/icons/ActiveCommunityIcon";



import InactiveHomeIconComponent from "./../../assets/icons/InactiveHomeIconComponent.js";
import InactiveProfileIconComponent from "./../../assets/icons/InactiveProfileIconComponent.js"
import InactiveMoreIconComponent from "./../../assets/icons/InactiveMoreIconComponent.js";
import InactiveCommunityIconComponent from "./../../assets/icons/InactiveCommunityIcon";
import InactiveTransactionsIconComponent from "./../../assets/icons/InactiveTransactionsIconComponent.js";
import { Host } from 'react-native-portalize';
import MerchantDashboard from "../../screens/Merchant/Home/MerchantDashboard/index";
import WithdrawsMerchant from "../../screens/Merchant/Withdraws/index";
import MoreMerchant from "../../screens/Merchant/More/index";



const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
	tabBarIcon: ({ focused,color }) => {
		let iconName;
		if (route.name === "Home") {
			return (
              focused?<ActiveHomeIconComponent/>:<InactiveHomeIconComponent/>
			);
		} else if (route.name === "Withdraws") {
			return (
              focused?<ActiveTransactionsIconComponent/>:<InactiveTransactionsIconComponent/>
			);
		} else if (route.name === "Profile") {
			return (
              focused?<ActiveProfileIconComponent/>:<InactiveProfileIconComponent/>
			);
		}
		else if (route.name === "More") {
			return (
              focused?<ActiveMoreIconComponent/>:<InactiveMoreIconComponent/>
			);
		}
	},
});
//main tab screen for logged in users
export default MerchantMainTab = () => {
	return (
		<Host>
		<Tab.Navigator
			initialRouteName="HomeStack"
			screenOptions={screenOptions}
			tabBarOptions={{
				activeTintColor: theme.colors.primary,
				inactiveTintColor: theme.colors.gray2,
				style: {
					paddingBottom:5,
					height:50,
					
				},
				labelStyle: {
					fontSize: 10,
				},
			}}
		>
			<Tab.Screen name="Home" component={HomeStack} />
			<Tab.Screen name="Withdraws" component={TransactionsStack} />
			{/*<Tab.Screen name="Campaigns" component={CampaignsStack} />
			<Tab.Screen name="Profile" component={ReceiverProfileStack} />
			<Tab.Screen name="Community" component={CommunityStack} /> */}

			<Tab.Screen name="More" component={MoreMerchantStack} />
		</Tab.Navigator>
		</Host>
	);
};

const HomeRoute = createStackNavigator();
function HomeStack() {
	return (
		<HomeRoute.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Home"
		>
			<HomeRoute.Screen name="Home" component={MerchantDashboard} />
			
		</HomeRoute.Navigator>
	);
}

const WithdrawsRoute = createStackNavigator();
function TransactionsStack() {
	return (
		<WithdrawsRoute.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Transactions"
		>
			<WithdrawsRoute.Screen
				name="Transactions"
				component={WithdrawsMerchant}
			/>
		</WithdrawsRoute.Navigator>
	);
}



const MerchantProfileRoute = createStackNavigator();
function MerchantProfileStack() {
	return (
		<MerchantProfileRoute.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Profile"
		>
			<MerchantProfileRoute.Screen name="Profile" component={ReceiverProfile} />
		</MerchantProfileRoute.Navigator>
	);
}

const MoreRoute = createStackNavigator();
function MoreStack() {
	return (
		<MoreRoute.Navigator
			screenOptions={{
				headerShown: true,
				headerTintColor:'red',
			}}
			initialRouteName="More"
		>
			<MoreRoute.Screen name="More" component={More} />
		</MoreRoute.Navigator>
	);
}

const MoreRouteMerchant = createStackNavigator();
function MoreMerchantStack() {
	return (
		<MoreRouteMerchant.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle:{
					backgroundColor:theme.colors.graybackground
				}

			}}
			initialRouteName="More"
		>
			<MoreRouteMerchant.Screen name="More" component={MoreMerchant} />
		</MoreRouteMerchant.Navigator>
	);
}
