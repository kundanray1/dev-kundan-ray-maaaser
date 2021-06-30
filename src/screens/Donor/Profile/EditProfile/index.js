import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import EditProfile from "./EditProfile";
import { editProfileStart,editProfileClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.editProfile,
	profileData: (state) => state.profile,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		editProfile: (values) => dispatch(editProfileStart(values)),
		editProfileClear: () => dispatch(editProfileClear()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(EditProfile);
