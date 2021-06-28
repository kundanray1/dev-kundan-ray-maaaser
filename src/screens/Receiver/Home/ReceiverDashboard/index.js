import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ReceiverDashboard from "./ReceiverDashboard";
import { receiverDashboardStart,balanceStart } from "./actions";
import { donationReceivedStart } from "./../DonationReceived/actions";
import { donorsStart } from "./../Donors/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.receiverDashboard,
	loginData: (state) => state.login,
	donationReceivedData: (state) => state.donationReceived,
	donorsData: (state) => state.donors,

});
const mapDispatchToProps = (dispatch) => {
	return {
		receiverDashboard: (values) => dispatch(receiverDashboardStart(values)),
		balance: (values) => dispatch(balanceStart(values)),
		donationReceived: (values) => dispatch(donationReceivedStart(values)),
		donors: () => dispatch(donorsStart()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ReceiverDashboard);
