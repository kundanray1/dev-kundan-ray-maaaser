import { all } from "redux-saga/effects";
//auth
import createNewPasswordSaga from "./../../screens/auth/CreateNewPassword/saga";
import forgotPasswordSaga from "./../../screens/auth/ForgotPassword/saga";
import loginSaga from "./../../screens/auth/Login/saga";
import signUpSaga from "./../../screens/auth/SignUp/saga";
import verificationSaga from "./../../screens/auth/Verification/saga";
import welcomeSaga from "./../../screens/auth/Welcome/saga";
import letsGetStartedDonorSaga from "./../../screens/auth/LetsGetStartedDonor/saga";
import letsGetStartedReceiverSaga from "./../../screens/auth/LetsGetStartedReceiver/saga";

//home
import ACHSaga from "./../../screens/Donor/Home/ACH/saga";
import ACHLoadFundSaga from "./../../screens/Donor/Home/ACHLoadFund/saga";
import ACHLoadFundConfirmationSaga from "./../../screens/Donor/Home/ACHLoadFundConfirmation/saga";

import cardSaga from "./../../screens/Donor/Home/Card/saga";
import cardLoadFundSaga from "./../../screens/Donor/Home/CardLoadFund/saga";
import cardLoadFundConfirmationSaga from "./../../screens/Donor/Home/CardLoadFundConfirmation/saga";
import donateNowSaga from "./../../screens/Donor/Home/DonateNow/saga";
import donationsMadeSaga from "./../../screens/Donor/Home/DonationsMade/saga";
import donorReceiverSaga from "./../../screens/Donor/Home/DonorReceiver/saga";
import linkNewAccountSaga from "./../../screens/Donor/Home/LinkNewAccount/saga";
import linkNewCardSaga from "./../../screens/Donor/Home/LinkNewCard/saga";
import loadFundSaga from "./../../screens/Donor/Home/LoadFund/saga";
import manualSaga from "./../../screens/Donor/Home/Manual/saga";
import manualDonateConfirmationSaga from "./../../screens/Donor/Home/ManualDonateConfirmation/saga";
import receiversSaga from "./../../screens/Donor/Home/Receivers/saga";
import scanQRSaga from "./../../screens/Donor/Home/ScanQR/saga";
import linkScheduleDonationSaga from "./../../screens/Donor/Home/LinkScheduleDonation/saga";
import scheduleDonationSaga from "./../../screens/Donor/Home/ScheduleDonation/saga";
import scheduleDonationReceiverDetailSaga from "./../../screens/Donor/Home/ScheduleDonationReceiverDetail/saga";
import upcomingDonationsSaga from "./../../screens/Donor/Home/UpcomingDonations/saga";
import uploadQRSaga from "./../../screens/Donor/Home/UploadQR/saga";

//campaigns
import campaignsSaga from "./../../screens/Campaigns/saga";
import subCampaignsSaga from "./../../screens/Campaigns/SubCampaigns/saga";
import campaignDetailsSaga from "./../../screens/Campaigns/CampaignDetails/saga";
import subCampaignsEditSaga from "./../../screens/Campaigns/CampaignSubCampaign/saga";
import allCampaignsSaga from "./../../screens/Campaigns/AllCampaigns/saga";
import startACampaignThirdSaga from "./../../screens/Campaigns/StartACampaignThird/saga";
import startACampaignThirdUpdateSaga from "./../../screens/Campaigns/StartACampaignThirdUpdate/saga";
import startACampaignSaga from "./../../screens/Campaigns/StartACampaign/saga";
import startASubCampaignSaga from "./../../screens/Campaigns/StartASubCampaign/saga";
import addBeneficiarySaga from "./../../screens/Campaigns/AddBeneficiary/saga";
import subCampaignDetailsSaga from "./../../screens/Campaigns/SubCampaignDetails/saga";
import campaignDonateNowConfirmationSaga from "./../../screens/Campaigns/CampaignDonateNowConfirmation/saga";
import campaignDonorsSaga from "./../../screens/Campaigns/CampaignDonors/saga";
import subCampaignDonorsSaga from "./../../screens/Campaigns/SubCampaignDonors/saga";
import campaignCommentsSaga from "./../../screens/Campaigns/CampaignComments/saga";
import subCampaignCommentsSaga from "./../../screens/Campaigns/SubCampaignComments/saga";

//more
import moreSaga from "./../../screens/Donor/More/saga";
import addMemberSaga from "./../../screens/Donor/More/AddMember/saga";
import membersSaga from "./../../screens/Donor/More/Members/saga";

//profile
import profileSaga from "./../../screens/Donor/Profile/saga";
import editProfileSaga from "./../../screens/Donor/Profile/EditProfile/saga";
import viewProfileSaga from "./../../screens/Donor/Profile/ViewProfile/saga";
import changePasswordSaga from "./../../screens/Donor/Profile/ChangePassword/saga";

//transactions
import transactionsSaga from "./../../screens/Donor/Transactions/saga";
import loadFundDetailsSaga from "./../../screens/Donor/Transactions/LoadFundDetails/saga";
import donationDetailsSaga from "./../../screens/Donor/Transactions/DonationDetails/saga";

//Receiver
//home
import receiverDashboardSaga from "./../../screens/Receiver/Home/ReceiverDashboard/saga";
import donorsSaga from "./../../screens/Receiver/Home/Donors/saga";
import donationReceivedSaga from "./../../screens/Receiver/Home/DonationReceived/saga";
import linkedAccountsSaga from "./../../screens/Receiver/Home/LinkedAccounts/saga";
import withdrawFundSaga from "./../../screens/Receiver/Home/WithdrawFund/saga";
import withdrawFundConfirmationSaga from "./../../screens/Receiver/Home/WithdrawFundConfirmation/saga";

//withdraws
import withdrawsSaga from "./../../screens/Receiver/Withdraws/saga";
import withdrawnDetailsSaga from "./../../screens/Receiver/Withdraws/WithdrawnDetails/saga";

//ReceiverProfile
import receiverProfileSaga from "./../../screens/Receiver/ReceiverProfile/saga";
import receiverViewProfileSaga from "./../../screens/Receiver/ReceiverProfile/ReceiverViewProfile/saga";
import receiverEditProfileSaga from "./../../screens/Receiver/ReceiverProfile/ReceiverEditProfile/saga";

export default function* rootSaga() {
	yield all([
		//auth
		createNewPasswordSaga(),
		forgotPasswordSaga(),
		loginSaga(),
		signUpSaga(),
		verificationSaga(),
		welcomeSaga(),
		letsGetStartedDonorSaga(),
		letsGetStartedReceiverSaga(),

		//home
		ACHSaga(),
		ACHLoadFundSaga(),
		ACHLoadFundConfirmationSaga(),
		cardSaga(),
		cardLoadFundSaga(),
		cardLoadFundConfirmationSaga(),
		donateNowSaga(),
		donationsMadeSaga(),
		donorReceiverSaga(),
		linkNewAccountSaga(),
		linkNewCardSaga(),
		loadFundSaga(),
		manualSaga(),
		manualDonateConfirmationSaga(),
		receiversSaga(),
		scanQRSaga(),
		linkScheduleDonationSaga(),
		scheduleDonationSaga(),
		scheduleDonationReceiverDetailSaga(),
		upcomingDonationsSaga(),
		// uploadQRSaga(),

		//campaigns
		campaignsSaga(),
		campaignDetailsSaga(),
		subCampaignsEditSaga(),
		allCampaignsSaga(),
		startACampaignThirdSaga(),
		startACampaignThirdUpdateSaga(),
		startACampaignSaga(),
		startASubCampaignSaga(),
		addBeneficiarySaga(),
		subCampaignsSaga(),
		subCampaignDetailsSaga(),
		campaignDonateNowConfirmationSaga(),
		campaignDonorsSaga(),
		subCampaignDonorsSaga(),
		campaignCommentsSaga(),
		subCampaignCommentsSaga(),

		//more
		moreSaga(),
		addMemberSaga(),
		membersSaga(),

		//profile
		profileSaga(),
		editProfileSaga(),
		viewProfileSaga(),
		changePasswordSaga(),

		//transactions
		transactionsSaga(),
		loadFundDetailsSaga(),
		donationDetailsSaga(),

		//Receivers
		//home
		receiverDashboardSaga(),
		donorsSaga(),
		donationReceivedSaga(),
		linkedAccountsSaga(),
		withdrawFundSaga(),
		withdrawFundConfirmationSaga(),

		//withdraws
		withdrawsSaga(),
		withdrawnDetailsSaga(),

		//ReceiverProfile
		receiverProfileSaga(),
		receiverViewProfileSaga(),
		receiverEditProfileSaga(),
	]);
}
