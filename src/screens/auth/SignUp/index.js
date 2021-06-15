import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SignUp from "./SignUp";
import { signUpStart } from "./actions";
import { loginStart } from "./../Login/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.signUp,

});
const mapDispatchToProps = (dispatch) => {
	return {
	signUp: (values) => dispatch(signUpStart(values)),
	login: (values) => dispatch(loginStart(values))
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SignUp);
