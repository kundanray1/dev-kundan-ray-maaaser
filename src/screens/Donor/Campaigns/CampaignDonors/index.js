import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CampaignDonors from "./CampaignDonors";
import { donationReceivedStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donationReceived,
});
const mapDispatchToProps = (dispatch) => {
	return {
		donationReceived: (values) => dispatch(donationReceivedStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CampaignDonors);
