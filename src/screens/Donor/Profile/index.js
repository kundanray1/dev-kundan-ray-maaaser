import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Profile from "./Profile";
import { welcomeStart } from "./actions";
import { balanceStart } from "./../Home/DonorReceiver/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.welcome,
	balanceData: (state) => state.donorReceiver,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
		welcome: (values) => dispatch(welcomeStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Profile);
