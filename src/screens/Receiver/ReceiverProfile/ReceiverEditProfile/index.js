import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ReceiverEditProfile from "./ReceiverEditProfile";
import { receiverEditProfileStart,receiverEditProfileClear } from "./actions";
import { imageUploadStart } from "./../../../auth/LetsGetStartedDonor/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.receiverEditProfile,
	loginData: (state) => state.login,
	receiverProfileData: (state) => state.receiverProfile,
	letsGetStartedDonorData: (state) => state.letsGetStartedDonor,
});
const mapDispatchToProps = (dispatch) => {
	return {
		receiverEditProfile: (values) => dispatch(receiverEditProfileStart(values)),
		receiverEditProfileClear: () => dispatch(receiverEditProfileClear()),
		imageUpload: (values) => dispatch(imageUploadStart(values))
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ReceiverEditProfile);
