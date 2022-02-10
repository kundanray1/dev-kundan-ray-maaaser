import React from "react";
import {Button} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import ReceiverDashboard from "../../screens/Receiver/Home/ReceiverDashboard/index";
import ReceiverProfile from "../../screens/Receiver/ReceiverProfile/index";
import Withdraws from "../../screens/Receiver/Withdraws/index";
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
		} else if (route.name === "Campaigns") {
			return (
              focused?<EmptyCampaignsIconComponent/>:<CampaignBottomMenuIconComponent/>
			);
		} else if (route.name === "Profile") {
			return (
              focused?<ActiveProfileIconComponent/>:<InactiveProfileIconComponent/>
			);
		} else if (route.name === "Community") {
			return (
              focused?<ActiveCommunityIconComponent/>:<InactiveCommunityIconComponent/>
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
export default ReceiverMainTab = () => {
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
			<Tab.Screen name="Campaigns" component={CampaignsStack} />
			<Tab.Screen name="Profile" component={ReceiverProfileStack} />
			<Tab.Screen name="Community" component={CommunityStack} />

			<Tab.Screen name="More" component={MoreStack} />
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
			<HomeRoute.Screen name="Home" component={ReceiverDashboard} />
			
		</HomeRoute.Navigator>
	);
}

const WithdrawsRoute = createStackNavigator();
function TransactionsStack() {
	return (
		<WithdrawsRoute.Navigator
			screenOptions={{
				headerShown: true,
			}}
			initialRouteName="Transactions"
		>
			<WithdrawsRoute.Screen
				name="Transactions"
				component={Withdraws}
			/>
		</WithdrawsRoute.Navigator>
	);
}

const CampaignsRoute = createStackNavigator();
function CampaignsStack() {
	return (
		<CampaignsRoute.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Campaigns"
		>
			<CampaignsRoute.Screen
				name="Campaigns"
				component={CampaignSubCampaignTabStack}
			/>
		</CampaignsRoute.Navigator>
	);
}

const ReceiverProfileRoute = createStackNavigator();
function ReceiverProfileStack() {
	return (
		<ReceiverProfileRoute.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Profile"
		>
			<ReceiverProfileRoute.Screen name="Profile" component={ReceiverProfile} />
		</ReceiverProfileRoute.Navigator>
	);
}

const CommunityRoute = createStackNavigator();
function CommunityStack() {
	return (
		<CommunityRoute.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Community"
		>
			<CommunityRoute.Screen name="Community" component={Community} />
		</CommunityRoute.Navigator>
	);
}

const MoreRoute = createStackNavigator();
function MoreStack() {
	return (
		<MoreRoute.Navigator
			screenOptions={{
				headerShown: true,
			}}
			initialRouteName="More"
		>
			<MoreRoute.Screen name="More" component={More} />
		</MoreRoute.Navigator>
	);
}
