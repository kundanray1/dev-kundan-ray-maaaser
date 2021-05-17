import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import reducer from "./reducer";
import saga from "./saga";
import ForgotPassword from "./ForgotPassword";
import { forgotPassword } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.forgotPassword,
});
const mapDispatchToProps = (dispatch) => {
	return {
		forgotPassword: (values) => dispatch(forgotPassword(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ForgotPassword);
