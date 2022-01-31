import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Profile from "./Profile";
import { balanceStart } from "./../Home/DonorReceiver/actions";
import { profileStart } from "./actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.profile,
	balanceData: (state) => state.donorReceiver,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
		profile: (values) => dispatch(profileStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Profile);
