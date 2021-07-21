import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CampaignDetails from "./CampaignDetails";
import { campaignDetailsStart,campaignDetailsURLStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaignDetails,
	loginData: (state) => state.login,
	campaignId: (state) => state.campaigns.campaignId,
	startACampaignThirdUpdateData: (state) => state.startACampaignThirdUpdate,
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaignDetails: (values) => dispatch(campaignDetailsStart(values)),
		campaignDetailsURLStart: (values) => dispatch(campaignDetailsURLStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CampaignDetails);
