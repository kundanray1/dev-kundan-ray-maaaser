import { combineReducers } from "redux";
//auth
import { createNewPasswordReducer } from "./../../screens/auth/CreateNewPassword/reducer";
import { forgotPasswordReducer } from "./../../screens/auth/ForgotPassword/reducer";
import { loginReducer } from "./../../screens/auth/Login/reducer";
import { signUpReducer } from "./../../screens/auth/SignUp/reducer";
import { verificationReducer } from "./../../screens/auth/Verification/reducer";
import { welcomeReducer } from "./../../screens/auth/Welcome/reducer";
import { letsGetStartedDonorReducer } from "./../../screens/auth/LetsGetStartedDonor/reducer";
import { letsGetStartedReceiverReducer } from "./../../screens/auth/LetsGetStartedReceiver/reducer";

//home
import { ACHReducer } from "./../../screens/Donor/Home/ACH/reducer";
import { ACHLoadFundReducer } from "./../../screens/Donor/Home/ACHLoadFund/reducer";
import { ACHLoadFundConfirmationReducer } from "./../../screens/Donor/Home/ACHLoadFundConfirmation/reducer";

import { cardReducer } from "./../../screens/Donor/Home/Card/reducer";
import { cardLoadFundReducer } from "./../../screens/Donor/Home/CardLoadFund/reducer";
import { cardLoadFundConfirmationReducer } from "./../../screens/Donor/Home/CardLoadFundConfirmation/reducer";

import { donateNowReducer } from "./../../screens/Donor/Home/DonateNow/reducer";
import { donationsMadeReducer } from "./../../screens/Donor/Home/DonationsMade/reducer";
import { donorReceiverReducer } from "./../../screens/Donor/Home/DonorReceiver/reducer";
import { linkNewAccountReducer } from "./../../screens/Donor/Home/LinkNewAccount/reducer";
import { linkNewCardReducer } from "./../../screens/Donor/Home/LinkNewCard/reducer";
import { loadFundReducer } from "./../../screens/Donor/Home/LoadFund/reducer";
import { manualReducer } from "./../../screens/Donor/Home/Manual/reducer";
import { manualDonateConfirmationReducer } from "./../../screens/Donor/Home/ManualDonateConfirmation/reducer";

import { receiversReducer } from "./../../screens/Donor/Home/Receivers/reducer";
import { scanQRCodeReducer } from "./../../screens/Donor/Home/ScanQRCode/reducer";
import { scanQRReducer } from "./../../screens/Donor/Home/ScanQR/reducer";
import { uploadQRReducer } from "./../../screens/Donor/Home/UploadQR/reducer";
import { linkScheduleDonationReducer } from "./../../screens/Donor/Home/LinkScheduleDonation/reducer";
import { scheduleDonationReducer } from "./../../screens/Donor/Home/ScheduleDonation/reducer";
import { scheduleDonationReceiverDetailReducer } from "./../../screens/Donor/Home/ScheduleDonationReceiverDetail/reducer";
import { upcomingDonationsReducer } from "./../../screens/Donor/Home/UpcomingDonations/reducer";
//campaigns
import { campaignsReducer } from "./../../screens/Campaigns/reducer";
import { campaignDetailsReducer } from "./../../screens/Campaigns/CampaignDetails/reducer";
import { subCampaignsEditReducer } from "./../../screens/Campaigns/CampaignSubCampaign/reducer";
import { allCampaignsReducer } from "./../../screens/Campaigns/AllCampaigns/reducer";
import { startACampaignThirdReducer } from "./../../screens/Campaigns/StartACampaignThird/reducer";
import { startACampaignReducer } from "./../../screens/Campaigns/StartACampaign/reducer";
import { startASubCampaignReducer } from "./../../screens/Campaigns/StartASubCampaign/reducer";
import { addBeneficiaryReducer } from "./../../screens/Campaigns/AddBeneficiary/reducer";
import { subCampaignsReducer } from "./../../screens/Campaigns/SubCampaigns/reducer";
import { subCampaignDetailsReducer } from "./../../screens/Campaigns/SubCampaignDetails/reducer";
import { campaignDonateNowConfirmationReducer } from "./../../screens/Campaigns/CampaignDonateNowConfirmation/reducer";
import { campaignDonorsReducer } from "./../../screens/Campaigns/CampaignDonors/reducer";
import { subCampaignDonorsReducer } from "./../../screens/Campaigns/SubCampaignDonors/reducer";
import { campaignCommentsReducer } from "./../../screens/Campaigns/CampaignComments/reducer";
import { subCampaignCommentsReducer } from "./../../screens/Campaigns/SubCampaignComments/reducer";


//more
import { moreReducer } from "./../../screens/Donor/More/reducer";
import { membersReducer } from "./../../screens/Donor/More/Members/reducer";
import { addMemberReducer } from "./../../screens/Donor/More/AddMember/reducer";

//profile
import { profileReducer } from "./../../screens/Donor/Profile/reducer";
import { editProfileReducer } from "./../../screens/Donor/Profile/EditProfile/reducer";
import { viewProfileReducer } from "./../../screens/Donor/Profile/ViewProfile/reducer";
import { changePasswordReducer } from "./../../screens/Donor/Profile/ChangePassword/reducer";

//transactions
import { transactionsReducer } from "./../../screens/Donor/Transactions/reducer";

//Receiver
//home
import { receiverDashboardReducer } from "./../../screens/Receiver/Home/ReceiverDashboard/reducer";
import { donorsReducer } from "./../../screens/Receiver/Home/Donors/reducer";
import { donationReceivedReducer } from "./../../screens/Receiver/Home/DonationReceived/reducer";
import { linkedAccountsReducer } from "./../../screens/Receiver/Home/LinkedAccounts/reducer";
import { withdrawFundReducer } from "./../../screens/Receiver/Home/WithdrawFund/reducer";
import { withdrawFundConfirmationReducer } from "./../../screens/Receiver/Home/WithdrawFundConfirmation/reducer";

// home
import { withdrawsReducer } from "./../../screens/Receiver/Withdraws/reducer";

// receiverProfile
import { receiverProfileReducer } from "./../../screens/Receiver/ReceiverProfile/reducer";
import { receiverViewProfileReducer } from "./../../screens/Receiver/ReceiverProfile/ReceiverViewProfile/reducer";
import { receiverEditProfileReducer } from "./../../screens/Receiver/ReceiverProfile/ReceiverEditProfile/reducer";

// add all the reducer, abd lets use this format of combineReducers so you can add more later if you need to.
const appReducer = combineReducers({
	//auth
	createNewPassword: createNewPasswordReducer,
	forgotPassword: forgotPasswordReducer,
	verification: verificationReducer,
	welcome: welcomeReducer,
	login: loginReducer,
	signUp: signUpReducer,
	letsGetStartedDonor: letsGetStartedDonorReducer,
	letsGetStartedReceiver: letsGetStartedReceiverReducer,
	//donor
	//home
	linkNewAccount: linkNewAccountReducer,
	ACH: ACHReducer,
	ACHLoadFund: ACHLoadFundReducer,
	ACHLoadFundConfirmation: ACHLoadFundConfirmationReducer,
	card: cardReducer,
	cardLoadFund: cardLoadFundReducer,
	cardLoadFundConfirmation: cardLoadFundConfirmationReducer,
	donateNow: donateNowReducer,
	donationsMade: donationsMadeReducer,
	donorReceiver: donorReceiverReducer,
	linkNewAccount: linkNewAccountReducer,
	linkNewCard: linkNewCardReducer,
	loadFund: loadFundReducer,
	manual: manualReducer,
	manualDonateConfirmation: manualDonateConfirmationReducer,
	receivers: receiversReducer,
	scanQRCodeReducer: scanQRCodeReducer,
	scanQRReducer: scanQRReducer,
	uploadQRReducer: uploadQRReducer,
	linkScheduleDonation: linkScheduleDonationReducer,
	scheduleDonation: scheduleDonationReducer,
	scheduleDonationReceiverDetail: scheduleDonationReceiverDetailReducer,
	upcomingDonations: upcomingDonationsReducer,

	//campaigns
	campaigns: campaignsReducer,
	campaignDetails: campaignDetailsReducer,
	subCampaignsEdit: subCampaignsEditReducer,
	allCampaigns: allCampaignsReducer,
	startACampaignThird: startACampaignThirdReducer,
	startACampaign: startACampaignReducer,
	startASubCampaign: startASubCampaignReducer,
	addBeneficiary: addBeneficiaryReducer,
	subCampaignDetails: subCampaignDetailsReducer,
	subCampaigns: subCampaignsReducer,
	campaignDonateNowConfirmation: campaignDonateNowConfirmationReducer,
	campaignDonors: campaignDonorsReducer,
	subCampaignDonors: subCampaignDonorsReducer,
	campaignComments:campaignCommentsReducer,
	subCampaignComments:subCampaignCommentsReducer,

	//more
	more: moreReducer,
	addMember: addMemberReducer,
	members: membersReducer,

	//profile
	profile: profileReducer,
	editProfile: editProfileReducer,
	viewProfile: viewProfileReducer,
	changePassword: changePasswordReducer,

	//transactions
	transactions: transactionsReducer,

	//Receivers
	//home
	receiverDashboard: receiverDashboardReducer,
	donors: donorsReducer,
	donationReceived: donationReceivedReducer,
	linkedAccounts: linkedAccountsReducer,
	withdrawFund: withdrawFundReducer,
	withdrawFundConfirmation: withdrawFundConfirmationReducer,

	//withdraws
	withdraws: withdrawsReducer,

	//receiverProfile
	receiverProfile: receiverProfileReducer,
	receiverEditProfile: receiverEditProfileReducer,
	receiverViewProfile: receiverViewProfileReducer,
});

const rootReducer = (state, action) => {
	// when a logout action is dispatched it will reset redux state

	if (action.type === "USER_LOGGED_OUT") {
		return appReducer(undefined, action);
	}
	return appReducer(state, action);
};

export default rootReducer;
