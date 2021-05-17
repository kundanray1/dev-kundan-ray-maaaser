import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import reducer from "./reducer";
import saga from "./saga";
import SignUp from "./SignUp";
import { signUpStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.signUp,
});
const mapDispatchToProps = (dispatch) => {
	return {
	signUp: (values) => dispatch(signUpStart(values))
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SignUp);
