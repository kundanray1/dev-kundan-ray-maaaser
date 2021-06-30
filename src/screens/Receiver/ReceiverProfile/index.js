import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ReceiverProfile from "./ReceiverProfile";
import { balanceStart } from "./../Home/ReceiverDashboard/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.receiverProfile,
	balanceData: (state) => state.receiverDashboard,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ReceiverProfile);
