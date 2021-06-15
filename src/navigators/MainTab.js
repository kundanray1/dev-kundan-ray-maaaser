import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as theme from "../constants/theme";
import AddNotification from "../screens/auth/AddNotification";
import DonorReceiver from "../screens/home/DonorReceiver/index";
import Profile from "../screens/Profile/index";
import More from "../screens/More/index";

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
export default MainTab = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeStack"
			screenOptions={screenOptions}
			tabBarOptions={{
				activeTintColor: theme.colors.primary2,
				inactiveTintColor: theme.colors.gray2,
				style: {
					paddingBottom: 5,
					height: 50,
				},
				labelStyle: {
					fontSize: 12,
				},
			}}
		>
			<Tab.Screen name="Home" component={HomeStack} />
			<Tab.Screen name="Transactions" component={TransactionsStack} />
			<Tab.Screen name="Notifications" component={NotificationsStack} />
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
				headerLeft: null,
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
				headerLeft: null,
			}}
			initialRouteName="Transactions"
		>
			<TransactionsRoute.Screen
				name="Transactions"
				component={More}
			/>
		</TransactionsRoute.Navigator>
	);
}

const NotificationsRoute = createStackNavigator();
function NotificationsStack() {
	return (
		<NotificationsRoute.Navigator
			screenOptions={{
				headerShown: true,
				headerLeft: null,
			}}
			initialRouteName="Notifications"
		>
			<NotificationsRoute.Screen
				name="Notifications"
				component={More}
			/>
		</NotificationsRoute.Navigator>
	);
}

const ProfileRoute = createStackNavigator();
function ProfileStack() {
	return (
		<ProfileRoute.Navigator
			screenOptions={{
				headerShown: false,
				headerLeft: null,
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
				headerLeft: null,
			}}
			initialRouteName="More"
		>
			<MoreRoute.Screen name="More" component={More} />
		</MoreRoute.Navigator>
	);
}
