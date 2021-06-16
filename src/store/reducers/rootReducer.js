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
import { ACHReducer } from "./../../screens/home/ACH/reducer";
import { cardReducer } from "./../../screens/home/Card/reducer";
import { confirmationReducer } from "./../../screens/home/Confirmation/reducer";
import { donateNowReducer } from "./../../screens/home/DonateNow/reducer";
import { donationsMadeReducer } from "./../../screens/home/DonationsMade/reducer";
import { donorReceiverReducer } from "./../../screens/home/DonorReceiver/reducer";
import { linkNewAccountReducer } from "./../../screens/home/LinkNewAccount/reducer";
import { linkNewCardReducer } from "./../../screens/home/LinkNewCard/reducer";
import { loadFundReducer } from "./../../screens/home/LoadFund/reducer";
import { manualReducer } from "./../../screens/home/Manual/reducer";
import { receiversReducer } from "./../../screens/home/Receivers/reducer";
import { scanQRCodeReducer } from "./../../screens/home/ScanQRCode/reducer";
import { scanQRReducer } from "./../../screens/home/ScanQR/reducer";
import { uploadQRReducer } from "./../../screens/home/UploadQR/reducer";
import { linkScheduleDonationReducer } from "./../../screens/home/LinkScheduleDonation/reducer";
import { scheduleDonationReducer } from "./../../screens/home/ScheduleDonation/reducer";
import { upcomingDonationsReducer } from "./../../screens/home/UpcomingDonations/reducer";

// add all the reducer, abd lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
	//auth
	createNewPassword: createNewPasswordReducer,
	forgotPassword: forgotPasswordReducer,
	verification: verificationReducer,
	welcome: welcomeReducer,
	login: loginReducer,
	signUp: signUpReducer,
	letsGetStartedDonor: letsGetStartedDonorReducer,
	letsGetStartedReceiver: letsGetStartedReceiverReducer,

	//home
	linkNewAccount: linkNewAccountReducer,
	ACH: ACHReducer,
	card: cardReducer,
	confirmation: confirmationReducer,
	donateNow: donateNowReducer,
	donationsMade: donationsMadeReducer,
	donorReceiver: donorReceiverReducer,
	linkNewAccount: linkNewAccountReducer,
	linkNewCard: linkNewCardReducer,
	loadFund: loadFundReducer,
	manual: manualReducer,
	receivers: receiversReducer,
	scanQRCodeReducer: scanQRCodeReducer,
	scanQRReducer: scanQRReducer,
	uploadQRReducer: uploadQRReducer,
	linkScheduleDonation: linkScheduleDonationReducer,
	scheduleDonation: scheduleDonationReducer,

	upcomingDonation: upcomingDonationsReducer,
});

export default rootReducer;
