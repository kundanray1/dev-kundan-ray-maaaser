import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ChangePassword from "./ChangePassword";
import { changePasswordStart,changePasswordClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.changePassword,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		changePassword: (values) => dispatch(changePasswordStart(values)),
		changePasswordClear: (values) => dispatch(changePasswordClear(values)),

	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ChangePassword);
