import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SubCampaigns from "./SubCampaigns";
import { subCampaignsStart } from "./actions";
import { campaignDetailsStart } from "./../CampaignDetails/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.subCampaigns,
	campaignDetailsdata: (state) => state.campaignDetails,
	campaignId: (state) => state.campaigns.campaignId,
});
const mapDispatchToProps = (dispatch) => {
	return {
		subCampaigns: (values) => dispatch(subCampaignsStart(values)),
		campaignDetails: (values) => dispatch(campaignDetailsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SubCampaigns);
