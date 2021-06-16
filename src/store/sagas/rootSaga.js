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
import ACHSaga from "./../../screens/home/ACH/saga";
import cardSaga from "./../../screens/home/Card/saga";
import confirmationSaga from "./../../screens/home/Confirmation/saga";
import donateNowSaga from "./../../screens/home/DonateNow/saga";
import donationsMadeSaga from "./../../screens/home/DonationsMade/saga";
import donorReceiverSaga from "./../../screens/home/DonorReceiver/saga";
import linkNewAccountSaga from "./../../screens/home/LinkNewAccount/saga";
import linkNewCardSaga from "./../../screens/home/LinkNewCard/saga";
import loadFundSaga from "./../../screens/home/LoadFund/saga";
import manualSaga from "./../../screens/home/Manual/saga";
import receiversSaga from "./../../screens/home/Receivers/saga";
import scanQRSaga from "./../../screens/home/ScanQR/saga";
import linkScheduleDonationSaga from "./../../screens/home/LinkScheduleDonation/saga";
import scheduleDonationSaga from "./../../screens/home/ScheduleDonation/saga";
import upcomingDonationsSaga from "./../../screens/home/UpcomingDonations/saga";
import uploadQRSaga from "./../../screens/home/UploadQR/saga";

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
		cardSaga(),
		confirmationSaga(),
		donateNowSaga(),
		donationsMadeSaga(),
		donorReceiverSaga(),
		linkNewAccountSaga(),
		linkNewCardSaga(),
		loadFundSaga(),
		manualSaga(),
		receiversSaga(),
		scanQRSaga(),
		linkScheduleDonationSaga(),
		scheduleDonationSaga(),
		upcomingDonationsSaga(),
		// uploadQRSaga(),
	]);
}
