import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import More from "./More";
import { logoutStart,logoutClear,userLoggedOut } from "./actions";
import { loginClear} from "./../../auth/Login/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.more,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logoutStart()),
		loginClear: () => dispatch(loginClear()),
		logoutClear: () => dispatch(logoutClear()),
		userLoggedOut: () => dispatch(userLoggedOut()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(More);
