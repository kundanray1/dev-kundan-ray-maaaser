import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonationReceived from "./DonationReceived";
import { donationReceivedStart,donationReceivedSearchStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donationReceived,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		donationReceived: (values) => dispatch(donationReceivedStart(values)),
		donationReceivedSearch: (values) => dispatch(donationReceivedSearchStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonationReceived);
