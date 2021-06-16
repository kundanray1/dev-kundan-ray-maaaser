import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MainTab from "./MainTab";
import DonateTabStack from "./DonateTabStack";


//auth
import AddNotification from "../screens/auth/AddNotification";
import LetsGetStartedDonor from "../screens/auth/LetsGetStartedDonor/index";
import LetsGetStartedReceiver from "../screens/auth/LetsGetStartedReceiver/index";

//home
import LoadFund from "../screens/home/LoadFund/index";
import UpcomingDonations from "../screens/home/UpcomingDonations/index";
import DonationsMade from "../screens/home/DonationsMade/index";
import Receivers from "../screens/home/Receivers/index";
import Manual from "../screens/home/Manual/index";
import Confirmation from "../screens/home/Confirmation/index";
import ACH from "../screens/home/ACH/index";
import Card from "../screens/home/Card/index";
import LinkNewCard from "../screens/home/LinkNewCard/index";
import LinkNewAccount from "../screens/home/LinkNewAccount/index";
import LinkScheduleDonation from "../screens/home/LinkScheduleDonation/index";
import ScanQRCodeTabStack from "./ScanQRCodeTabStack";
import ScheduleDonationReceiverDetail from "../screens/home/ScheduleDonationReceiverDetail/index";

//navigator for logged in users
const AuthStack = createStackNavigator();
const LoggedInStack = ({ data }) => {
  let routeName;
  if (data.user.account.isfirstlogin == false) {
    if (data.user.account.accounttype == 2 && data.user.clienttype == 1) {
      routeName = "Lets Get Started Donor";
    } else if (
      data.user.account.accounttype == 2 &&
      data.user.clienttype == 2
    ) {
      routeName = "Lets Get Started Donor";
    } else if (
      data.user.account.accounttype == 3 &&
      data.user.clienttype == 1
    ) {
      routeName = "Lets Get Started Receiver";
    } else if (
      data.user.account.accounttype == 3 &&
      data.user.clienttype == 2
    ) {
      routeName = "Lets Get Started Receiver";
    }
  } else {
    routeName = "MainTab";
  }

  return (
    <AuthStack.Navigator initialRouteName={routeName}>
      <AuthStack.Screen
        name="MainTab"
        options={{ headerShown: false }}
        component={MainTab}
      />
       <AuthStack.Screen
        name="Load Fund"
        options={{ headerShown: true }}
        component={LoadFund}
      />
      <AuthStack.Screen
        name="Lets Get Started Donor"
        options={{ headerShown: false }}
        component={LetsGetStartedDonor}
      />
      <AuthStack.Screen
        name="Lets Get Started Receiver"
        options={{ headerShown: false }}
        component={LetsGetStartedReceiver}
      />
      <AuthStack.Screen
        name="Upcoming Donations"
        options={{ headerShown: true }}
        component={UpcomingDonations}
      />
      <AuthStack.Screen
        name="Donations Made"
        options={{ headerShown: true }}
        component={DonationsMade}
      />
      <AuthStack.Screen
        name="Receivers"
        options={{ headerShown: true }}
        component={Receivers}
      />
      <AuthStack.Screen
        name="Donate"
        options={{ headerShown: true }}
        component={DonateTabStack}
      />
      <AuthStack.Screen
        name="Manual"
        options={{ headerShown: true }}
        component={Manual}
      />
      <AuthStack.Screen
        name="Confirmation"
        options={{ headerShown: true }}
        component={Confirmation}
      />
      <AuthStack.Screen
        name="ACH"
        options={{ headerShown: true }}
        component={ACH}
      />
      <AuthStack.Screen
        name="Card"
        options={{ headerShown: true }}
        component={Card}
      />
      <AuthStack.Screen
        name="Link New Card"
        options={{ headerShown: true }}
        component={LinkNewCard}
      />
       <AuthStack.Screen
        name="Link New Account"
        options={{ headerShown: true }}
        component={LinkNewAccount}
      />
      <AuthStack.Screen
        name="Link Schedule Donation"
        options={{ headerShown: true }}
        component={LinkScheduleDonation}
      />
      <AuthStack.Screen
        name="Scan QR Code"
        options={{ headerShown: true }}
        component={ScanQRCodeTabStack}
      />
      <AuthStack.Screen
        name="Details"
        options={{ headerShown: true }}
        component={ScheduleDonationReceiverDetail}
      />
    </AuthStack.Navigator>
  );
};

const structuredSelector = createStructuredSelector({
  data: (state) => state.login,
});

export default connect(structuredSelector)(LoggedInStack);
