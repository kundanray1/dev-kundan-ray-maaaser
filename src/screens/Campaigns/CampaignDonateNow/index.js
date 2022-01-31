import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CampaignDonateNow from "./CampaignDonateNow";
import { campaignDonateNowStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaignDonateNow,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaignDonateNow: (values) => dispatch(campaignDonateNowStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CampaignDonateNow);
