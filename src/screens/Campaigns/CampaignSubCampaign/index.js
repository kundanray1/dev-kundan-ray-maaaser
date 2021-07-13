import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CampaignSubCampaigns from "./CampaignSubCampaigns";
import { subCampaignsStart,subCampaignId } from "./actions";
import { campaignDetailsStart } from "./../CampaignDetails/actions";
const mapStateToProps = createStructuredSelector({
	data: (state) => state.subCampaigns,
	loginData: (state) => state.login,
	campaignDetailsdata: (state) => state.campaignDetails,
	campaignId: (state) => state.campaigns.campaignId,
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaignDetails: (values) => dispatch(campaignDetailsStart(values)),
		subCampaignId: (values) => dispatch(subCampaignId(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CampaignSubCampaigns);
