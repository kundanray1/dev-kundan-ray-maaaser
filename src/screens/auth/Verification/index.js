import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Verification from "./Verification";
import { verificationStart } from "./actions";
import { forgotPasswordStart } from "./../ForgotPassword/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.verification,
	forgotPasswordData: (state) => state.forgotPassword,

});
const mapDispatchToProps = (dispatch) => {
	return {
		verification: (values) => dispatch(verificationStart(values)),
		forgotPassword: (values) => dispatch(forgotPasswordStart(values)),
	};
};


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Verification);
