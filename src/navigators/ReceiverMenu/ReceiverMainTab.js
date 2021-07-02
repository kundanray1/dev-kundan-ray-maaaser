import React from "react";
import {Button} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import ReceiverDashboard from "../../screens/Receiver/Home/ReceiverDashboard/index";
import ReceiverProfile from "../../screens/Receiver/ReceiverProfile/index";
import Withdraws from "../../screens/Receiver/Withdraws/index";
// import More from "../../screens/Donor/More/index";

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
	tabBarIcon: ({ color }) => {
		let iconName;
		if (route.name === "Home") {
			iconName = "home-sharp";
		} else if (route.name === "Withdraws") {
			return (
				<MaterialIcons
					name="swap-horizontal-circle"
					size={22}
					color={color}
				/>
			);
		} else if (route.name === "Notifications") {
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
export default ReceiverMainTab = () => {
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
			<Tab.Screen name="Withdraws" component={WithdrawsStack} />
			{/*<Tab.Screen name="Notifications" component={NotificationsStack} />*/}
			<Tab.Screen name="Profile" component={ReceiverProfileStack} />
			{/*<Tab.Screen name="More" component={MoreStack} />*/}
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
			<HomeRoute.Screen name="Home" component={ReceiverDashboard} />
			
		</HomeRoute.Navigator>
	);
}

const WithdrawsRoute = createStackNavigator();
function WithdrawsStack() {
	return (
		<WithdrawsRoute.Navigator
			screenOptions={{
				headerShown: true,
			}}
			initialRouteName="Withdraws"
		>
			<WithdrawsRoute.Screen
				name="Withdraws"
				component={Withdraws}
			/>
		</WithdrawsRoute.Navigator>
	);
}

// const NotificationsRoute = createStackNavigator();
// function NotificationsStack() {
// 	return (
// 		<NotificationsRoute.Navigator
// 			screenOptions={{
// 				headerShown: true,
// 			}}
// 			initialRouteName="Notifications"
// 		>
// 			<NotificationsRoute.Screen
// 				name="Notifications"
// 				component={More}
// 			/>
// 		</NotificationsRoute.Navigator>
// 	);
// }

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

// const MoreRoute = createStackNavigator();
// function MoreStack() {
// 	return (
// 		<MoreRoute.Navigator
// 			screenOptions={{
// 				headerShown: true,
// 			}}
// 			initialRouteName="More"
// 		>
// 			<MoreRoute.Screen name="More" component={More} />
// 		</MoreRoute.Navigator>
// 	);
// }
