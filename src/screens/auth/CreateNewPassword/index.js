import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CreateNewPassword from "./CreateNewPassword";
import { createNewPasswordStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.createNewPassword,
	forgotPasswordData: (state) => state.forgotPassword,
	verificationData: (state) => state.verification,
});
const mapDispatchToProps = (dispatch) => {
	return {
		createNewPassword: (values) => dispatch(createNewPasswordStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CreateNewPassword);
