import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CampaignDonors from "./CampaignDonors";
import { campaignDonorsStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaignDonors,
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaignDonors: (values) => dispatch(campaignDonorsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CampaignDonors);
