import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import DonorMainTab from "./DonorMenu/DonorMainTab";
import ReceiverMainTab from "./ReceiverMenu/ReceiverMainTab";
import DonateTabStack from "./DonorMenu/DonateTabStack";
import CampaignTabStack from "./DonorMenu/CampaignTabStack";
import SubCampaignTabStack from "./DonorMenu/SubCampaignTabStack";

//auth
import LetsGetStartedDonor from "../screens/auth/LetsGetStartedDonor/index";
import LetsGetStartedReceiver from "../screens/auth/LetsGetStartedReceiver/index";

//home
import LoadFund from "../screens/Donor/Home/LoadFund/index";
import UpcomingDonations from "../screens/Donor/Home/UpcomingDonations/index";
import DonationsMade from "../screens/Donor/Home/DonationsMade/index";
import Receivers from "../screens/Donor/Home/Receivers/index";
import Manual from "../screens/Donor/Home/Manual/index";
import ManualDonateConfirmation from "../screens/Donor/Home/ManualDonateConfirmation/index";
import DonateViaScan from "../screens/Donor/Home/DonateViaScan/index";
import DonateViaScanConfirmation from "../screens/Donor/Home/DonateViaScanConfirmation/index";
import DonateFromReceiversList from "../screens/Donor/Home/DonateFromReceiversList/index";
import DonateFromReceiversListConfirmation from "../screens/Donor/Home/DonateFromReceiversListConfirmation/index";
import ACH from "../screens/Donor/Home/ACH/index";
import ACHLoadFund from "../screens/Donor/Home/ACHLoadFund/index";
import ACHLoadFundConfirmation from "../screens/Donor/Home/ACHLoadFundConfirmation/index";
import Card from "../screens/Donor/Home/Card/index";
import CardLoadFund from "../screens/Donor/Home/CardLoadFund/index";
import CardLoadFundConfirmation from "../screens/Donor/Home/CardLoadFundConfirmation/index";
import LinkNewCard from "../screens/Donor/Home/LinkNewCard/index";
import LinkNewAccount from "../screens/Donor/Home/LinkNewAccount/index";
import LinkScheduleDonation from "../screens/Donor/Home/LinkScheduleDonation/index";
import ScanQRCodeTabStack from "./DonorMenu/ScanQRCodeTabStack";
import ScheduleDonationReceiverDetail from "../screens/Donor/Home/ScheduleDonationReceiverDetail/index";

//campaigns
import StartACampaign from "../screens/Campaigns/StartACampaign/index";
import StartACampaignSecond from "../screens/Campaigns/StartACampaignSecond/index";
import StartACampaignThird from "../screens/Campaigns/StartACampaignThird/index";
import StartACampaignUpdate from "../screens/Campaigns/StartACampaignUpdate/index";
import StartACampaignSecondUpdate from "../screens/Campaigns/StartACampaignSecondUpdate/index";
import StartACampaignThirdUpdate from "../screens/Campaigns/StartACampaignThirdUpdate/index";
import StartASubCampaign from "../screens/Campaigns/StartASubCampaign/index";
import AddBeneficiary from "../screens/Campaigns/AddBeneficiary/index";
import AllCampaigns from "../screens/Campaigns/AllCampaigns/index";
import CampaignQRCode from "../screens/Campaigns/CampaignQRCode/index";
import CampaignDonateNow from "../screens/Campaigns/CampaignDonateNow/index";
import CampaignDonateNowConfirmation from "../screens/Campaigns/CampaignDonateNowConfirmation/index";
import SubCampaignDonateNow from "../screens/Campaigns/SubCampaignDonateNow/index";
import SubCampaignDonateNowConfirmation from "../screens/Campaigns/SubCampaignDonateNowConfirmation/index";
import SUbCampaignQRCode from "../screens/Campaigns/SubCampaignQRCode/index";

//more
import AddMember from "../screens/Donor/More/AddMember/index";
import Members from "../screens/Donor/More/Members/index";

//profile
import EditProfile from "../screens/Donor/Profile/EditProfile/index";
import ViewProfile from "../screens/Donor/Profile/ViewProfile/index";
import ChangePassword from "../screens/Donor/Profile/ChangePassword/index";

//Transactions
import DonationDetails from "../screens/Donor/Transactions/DonationDetails/index";
import LoadFundDetails from "../screens/Donor/Transactions/LoadFundDetails/index";

//Receivers
//home
import ReceiverDashboard from "../screens/Receiver/Home/ReceiverDashboard/index";
import DonationReceived from "../screens/Receiver/Home/DonationReceived/index";
import Donors from "../screens/Receiver/Home/Donors/index";
import LinkedAccounts from "../screens/Receiver/Home/LinkedAccounts/index";
import WithdrawFund from "../screens/Receiver/Home/WithdrawFund/index";
import WithdrawFundConfirmation from "../screens/Receiver/Home/WithdrawFundConfirmation/index";

//profile
import ReceiverEditProfile from "../screens/Receiver/ReceiverProfile/ReceiverEditProfile/index";
import ReceiverViewProfile from "../screens/Receiver/ReceiverProfile/ReceiverViewProfile/index";
import MyQRCode from "../screens/Receiver/ReceiverProfile/MyQRCode/index";
import API from "./../api/API";

//withdrawnsDetails
import WithdrawnDetails from "../screens/Receiver/Withdraws/WithdrawnDetails/index";
import CreateNewPassword from "../screens/auth/CreateNewPassword/index";

//navigator for logged in users
const AuthStack = createStackNavigator();
const LoggedInStack = ({ data }) => {
  let routeName;
  if (data.employee !== null) {
    if (data.employee.account.isfirstlogin == false) {
      routeName = "Change Password";
    }
  } else {
    if (data.user.account.isfirstlogin == false) {
      if (data.user.account.accounttype == 2) {
        routeName = "Lets Get Started Donor";
      } else {
        routeName = "Lets Get Started Receiver";
      }
    } else if (data.user.account.accounttype == 3) {
      routeName = "ReceiverMainTab";
    } else {
      routeName = "DonorMainTab";
    }
  }

  return (
    <AuthStack.Navigator initialRouteName={routeName}>
      <AuthStack.Screen
        name="DonorMainTab"
        options={{ headerShown: false }}
        component={DonorMainTab}
      />
      <AuthStack.Screen
        name="ReceiverMainTab"
        options={{ headerShown: false }}
        component={ReceiverMainTab}
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
        name="Manual Donate Confirmation"
        options={{ headerShown: true, title: "Confirmation" }}
        component={ManualDonateConfirmation}
      />
      <AuthStack.Screen
        name="Donate Via Scan"
        options={{ headerShown: true, title: "Donate" }}
        component={DonateViaScan}
      />
      <AuthStack.Screen
        name="Donate Via Scan Confirmation"
        options={{ headerShown: true, title: "Confirmation" }}
        component={DonateViaScanConfirmation}
      />
      <AuthStack.Screen
        name="ACH"
        options={{ headerShown: true }}
        component={ACH}
      />
      <AuthStack.Screen
        name="ACH Load Fund"
        options={{ headerShown: true }}
        component={ACHLoadFund}
      />
      <AuthStack.Screen
        name="ACH Load Fund Confirmation"
        options={{ headerShown: true, title: "Confirmation" }}
        component={ACHLoadFundConfirmation}
      />
      <AuthStack.Screen
        name="Card"
        options={{ headerShown: true }}
        component={Card}
      />
      <AuthStack.Screen
        name="Card Load Fund"
        options={{ headerShown: true }}
        component={CardLoadFund}
      />
      <AuthStack.Screen
        name="Card Load Fund Confirmation"
        options={{ headerShown: true, title: "Confirmation" }}
        component={CardLoadFundConfirmation}
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
        options={{ headerShown: true, title: "Schedule Donation" }}
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
      <AuthStack.Screen
        name="Add New Member"
        options={{ headerShown: true }}
        component={AddMember}
      />
      <AuthStack.Screen
        name="Members"
        options={{ headerShown: true }}
        component={Members}
      />
      <AuthStack.Screen
        name="View Profile"
        options={{ headerShown: false }}
        component={ViewProfile}
      />
      <AuthStack.Screen
        name="Edit Profile"
        options={{ headerShown: false }}
        component={EditProfile}
      />
      <AuthStack.Screen
        name="Change Password"
        options={{ headerShown: true }}
        component={ChangePassword}
      />
      <AuthStack.Screen
        name="Donation Received"
        options={{ headerShown: true }}
        component={DonationReceived}
      />
      <AuthStack.Screen
        name="Donors"
        options={{ headerShown: true }}
        component={Donors}
      />
      <AuthStack.Screen
        name="Linked Accounts"
        options={{ headerShown: true }}
        component={LinkedAccounts}
      />
      <AuthStack.Screen
        name="Withdraw Fund"
        options={{ headerShown: true }}
        component={WithdrawFund}
      />
      <AuthStack.Screen
        name="Withdraw Fund Confirmation"
        options={{ headerShown: true, title: "Confirmation" }}
        component={WithdrawFundConfirmation}
      />
      <AuthStack.Screen
        name="Receiver View Profile"
        options={{ headerShown: false }}
        component={ReceiverViewProfile}
      />
      <AuthStack.Screen
        name="Receiver Edit Profile"
        options={{ headerShown: false }}
        component={ReceiverEditProfile}
      />
      <AuthStack.Screen
        name="My QR Code"
        options={{ headerShown: true }}
        component={MyQRCode}
      />
      <AuthStack.Screen
        name="Donation Details"
        options={{ headerShown: true, title: "Details" }}
        component={DonationDetails}
      />
      <AuthStack.Screen
        name="Load Fund Details"
        options={{ headerShown: true, title: "Details" }}
        component={LoadFundDetails}
      />
      <AuthStack.Screen
        name="Start a campaign"
        options={{ headerShown: true }}
        component={StartACampaign}
      />
      <AuthStack.Screen
        name="Add Beneficiary"
        options={{ headerShown: true }}
        component={AddBeneficiary}
      />
      <AuthStack.Screen
        name="Start a sub campaign"
        options={{ headerShown: true }}
        component={StartASubCampaign}
      />
      <AuthStack.Screen
        name="Start a campaign second"
        options={{ headerShown: true, title: "Start a campaign" }}
        component={StartACampaignSecond}
      />
      <AuthStack.Screen
        name="Start a campaign third"
        options={{ headerShown: true, title: "Start a campaign" }}
        component={StartACampaignThird}
      />
      <AuthStack.Screen
        name="Start a campaign update"
        options={{ headerShown: true, title: "Update Campaign" }}
        component={StartACampaignUpdate}
      />
      <AuthStack.Screen
        name="Start a campaign second update"
        options={{ headerShown: true, title: "Update Campaign" }}
        component={StartACampaignSecondUpdate}
      />
      <AuthStack.Screen
        name="Start a campaign third update"
        options={{ headerShown: true, title: "Update Campaign" }}
        component={StartACampaignThirdUpdate}
      />
      <AuthStack.Screen
        name="Campaign Details"
        options={{ headerShown: true }}
        component={CampaignTabStack}
      />
      <AuthStack.Screen
        name="All Campaigns"
        options={{ headerShown: true }}
        component={AllCampaigns}
      />
      <AuthStack.Screen
        name="Campaign QR Code"
        options={{ headerShown: true }}
        component={CampaignQRCode}
      />

      <AuthStack.Screen
        name="Sub Campaign QR Code"
        options={{ headerShown: true }}
        component={SubCampaignQRCode}
      />

      <AuthStack.Screen
        name="Sub Campaign Details"
        options={{ headerShown: true }}
        component={SubCampaignTabStack}
      />
      <AuthStack.Screen
        name="Campaign Donate Now"
        options={{ headerShown: true, title: "Donate Now" }}
        component={CampaignDonateNow}
      />
      <AuthStack.Screen
        name="Campaign Donate Now Confirmation"
        options={{ headerShown: true, title: "Confirmation" }}
        component={CampaignDonateNowConfirmation}
      />
      <AuthStack.Screen
        name="Sub Campaign Donate Now"
        options={{ headerShown: true, title: "Donate Now" }}
        component={SubCampaignDonateNow}
      />
      <AuthStack.Screen
        name="Sub Campaign Donate Now Confirmation"
        options={{ headerShown: true, title: "Confirmation" }}
        component={SubCampaignDonateNowConfirmation}
      />
      <AuthStack.Screen
        name="Withdrawn Details"
        options={{ headerShown: true, title: "Details" }}
        component={WithdrawnDetails}
      />

      <AuthStack.Screen
        name="Donate From Receivers List"
        options={{ headerShown: true, title: "Details" }}
        component={DonateFromReceiversList}
      />
      <AuthStack.Screen
        name="Donate From Receivers List Confirmation"
        options={{ headerShown: true, title: "Confirmation" }}
        component={DonateFromReceiversListConfirmation}
      />
    </AuthStack.Navigator>
  );
};

const structuredSelector = createStructuredSelector({
  data: (state) => state.login,
});

export default connect(structuredSelector)(LoggedInStack);
