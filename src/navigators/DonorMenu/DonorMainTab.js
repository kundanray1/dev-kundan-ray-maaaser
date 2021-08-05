import React from "react";
import {Button} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
// import AddNotification from "../../screens/auth/AddNotification";
import DonorReceiver from "../../screens/Donor/Home/DonorReceiver/index";
import Profile from "../../screens/Donor/Profile/index";
import Transactions from "../../screens/Donor/Transactions/index";
import More from "../../screens/Donor/More/index";
import CampaignSubCampaignTabStack from "./CampaignSubCampaignTabStack";


import CampaignBottomMenuIconComponent from "./../../assets/icons/campaignBottomMenuIconComponent.js";
import EmptyCampaignsIconComponent from "./../../assets/icons/emptyCampaignsIconComponent.js";

import ActiveHomeIconComponent from "./../../assets/icons/ActiveHomeIconComponent.js";
import ActiveProfileIconComponent from "./../../assets/icons/ActiveProfileIconComponent.js";
import ActiveMoreIconComponent from "./../../assets/icons/ActiveMoreIconComponent.js";
import ActiveTransactionsIconComponent from "./../../assets/icons/ActiveTransactionsIconComponent.js";

import InactiveHomeIconComponent from "./../../assets/icons/InactiveHomeIconComponent.js";
import InactiveProfileIconComponent from "./../../assets/icons/InactiveProfileIconComponent.js"
import InactiveMoreIconComponent from "./../../assets/icons/InactiveMoreIconComponent.js";
import InactiveTransactionsIconComponent from "./../../assets/icons/InactiveTransactionsIconComponent.js";


const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
	tabBarIcon: ({ focused,color }) => {
		let iconName;
		if (route.name === "Home") {
			return (
              focused?<ActiveHomeIconComponent/>:<InactiveHomeIconComponent/>
			);
		} else if (route.name === "Transactions") {
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
		} else if (route.name === "More") {
			return (
              focused?<ActiveMoreIconComponent/>:<InactiveMoreIconComponent/>
			);
		}
	},
});
//main tab screen for logged in users
export default MainTab = () => {
	return (
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
			<Tab.Screen name="Transactions" component={TransactionsStack} />
			<Tab.Screen name="Campaigns" component={CampaignsStack} />
			<Tab.Screen name="Profile" component={ProfileStack} />
			<Tab.Screen name="More" component={MoreStack} />
		</Tab.Navigator>
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
			<HomeRoute.Screen name="Home" component={DonorReceiver} />
			
		</HomeRoute.Navigator>
	);
}

const TransactionsRoute = createStackNavigator();
function TransactionsStack() {
	return (
		<TransactionsRoute.Navigator
			screenOptions={{
				headerShown: true,
			}}
			initialRouteName="Transactions"
		>
			<TransactionsRoute.Screen
				name="Transactions"
				component={Transactions}
			/>
		</TransactionsRoute.Navigator>
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

const ProfileRoute = createStackNavigator();
function ProfileStack() {
	return (
		<ProfileRoute.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Profile"
		>
			<ProfileRoute.Screen name="Profile" component={Profile} />
		</ProfileRoute.Navigator>
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
