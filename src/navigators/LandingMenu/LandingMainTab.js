import React from "react";
import {Button} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import ActiveCommunityIconComponent from "./../../assets/icons/ActiveCommunityIcon";
import DiscoverBlueIconComponent from "./../../assets/icons/discoverBlueIconComponent.js";
import DiscoverLightIconComponent from "./../../assets/icons/discoverLighIconComponent.js"
import ReceiverBlueIconComponent from "./../../assets/icons/receiverBlueIconComponent.js";
import InactiveCommunityIconComponent from "./../../assets/icons/InactiveCommunityIcon";
import ReceiverLightIconComponent from "./../../assets/icons/receiverLightIconComponent.js";
import UserBlueIconComponent from "./../../assets/icons/userBlueIconComponent";
import UserLightIconComponent from "./../../assets/icons/userLigthtIconComponent";
import { Host } from 'react-native-portalize';
import Discover from "../../screens/Landing/Discover/Discover";
import Communities from "../../screens/Landing/Communities/Communities";
import Receivers from "../../screens/Landing/Receivers/Receivers";
import SignIn from "../../screens/Landing/Sign in/SignIn";



const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
	tabBarIcon: ({ focused,color }) => {
		let iconName;
		if (route.name === "Discover") {
			return (
              focused?<DiscoverBlueIconComponent/>:<DiscoverLightIconComponent/>
			);
		} else if (route.name === "Communities") {
			return (
              focused?<ActiveCommunityIconComponent/>:<InactiveCommunityIconComponent/>
			);
		} else if (route.name === "Receivers") {
			return (
              focused?<ReceiverBlueIconComponent/>:<ReceiverLightIconComponent/>
			);
		}
		else if (route.name === "Sign in") {
			return (
              focused?<UserBlueIconComponent/>:<UserLightIconComponent/>
			);
		}
	},
});
//main tab screen for logged in users
export default LandingMainTab = () => {
	return (
		<Host>
		<Tab.Navigator
			initialRouteName="Discover"
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
			<Tab.Screen name="Discover" component={HomeStack} />
			<Tab.Screen name="Communities" component={CommunityStack} />
			<Tab.Screen name="Receivers" component={ReceiversStack} />
            <Tab.Screen name="Sign in" component={SignInStack} />

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
			initialRouteName="Discover"
		>
			<HomeRoute.Screen name="Discover" component={Discover} />
			
		</HomeRoute.Navigator>
	);
}

const LandingCommunityRoute = createStackNavigator();
function CommunityStack() {
	return (
		<LandingCommunityRoute.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Communities"
		>
			<LandingCommunityRoute.Screen
				name="Communities"
				component={Communities}
			/>
		</LandingCommunityRoute.Navigator>
	);
}



const LandingReceiverRoute = createStackNavigator();
function ReceiversStack() {
	return (
		<LandingReceiverRoute.Navigator
			screenOptions={{
				headerShown: false,
			

			}}
			initialRouteName="Receivers"
		>
			<LandingReceiverRoute.Screen name="Receivers" component={Receivers} />
		</LandingReceiverRoute.Navigator>
	);
}

const LandingSignInRoute = createStackNavigator();
function SignInStack() {
	return (
		<LandingSignInRoute.Navigator
			screenOptions={{
				headerShown: false,
			

			}}
			initialRouteName="Sign in"
		>
			<LandingSignInRoute.Screen name="Sign in" component={SignIn} />
		</LandingSignInRoute.Navigator>
	);
}

