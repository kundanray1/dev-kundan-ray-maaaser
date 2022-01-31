import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import EditProfile from "./EditProfile";
import { editProfileStart,editProfileClear,editEmployeeProfileStart } from "./actions";
import { imageUploadStart,imageUploadClear } from "./../../../auth/LetsGetStartedDonor/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.editProfile,
	letsGetStartedDonorData: (state) => state.letsGetStartedDonor,
	profileData: (state) => state.profile,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		editProfile: (values) => dispatch(editProfileStart(values)),
		editEmployeeProfile: (values) => dispatch(editEmployeeProfileStart(values)),
		editProfileClear: () => dispatch(editProfileClear()),
		imageUpload: (values) => dispatch(imageUploadStart(values)),
		imageUploadClear: (values) => dispatch(imageUploadClear(values)),

	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(EditProfile);
