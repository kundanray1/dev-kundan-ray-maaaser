import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Community from "./Community";
import { balanceStart } from "./../Home/ReceiverDashboard/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.community,
	balanceData: (state) => state.receiverDashboard,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Community);
