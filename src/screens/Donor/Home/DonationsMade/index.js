import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonationsMade from "./DonationsMade";
import { donationsMadeStart,donationsMadeSearchStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donationsMade,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		donationsMade: (values) => dispatch(donationsMadeStart(values)),
		donationsMadeSearch: (values) => dispatch(donationsMadeSearchStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonationsMade);
