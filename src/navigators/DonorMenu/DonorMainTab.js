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
import Campaigns from "../../screens/Donor/Campaigns/index";

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
	tabBarIcon: ({ color }) => {
		let iconName;
		if (route.name === "Home") {
			iconName = "home-sharp";
		} else if (route.name === "Transactions") {
			return (
				<MaterialIcons
					name="swap-horizontal-circle"
					size={22}
					color={color}
				/>
			);
		} else if (route.name === "Campaigns") {
			iconName = "notifications-sharp";
		} else if (route.name === "Profile") {
			iconName = "person-circle";
		} else if (route.name === "More") {
			iconName = "md-ellipsis-horizontal";
		}
		return <Ionicons name={iconName} color={color} size={22} />;
	},
});
//main tab screen for logged in users
export default MainTab = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeStack"
			screenOptions={screenOptions}
			tabBarOptions={{
				activeTintColor: theme.colors.primary2,
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
				headerShown: true,
			}}
			initialRouteName="Campaigns"
		>
			<CampaignsRoute.Screen
				name="Campaigns"
				component={Campaigns}
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
