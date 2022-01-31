import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonationDetails from "./DonationDetails";
import { donationDetailsStart,donationDetailsClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donationDetails,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		donationDetailsStart: (values) => dispatch(donationDetailsStart(values)),
		donationDetailsClear: () => dispatch(donationDetailsClear()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonationDetails);
