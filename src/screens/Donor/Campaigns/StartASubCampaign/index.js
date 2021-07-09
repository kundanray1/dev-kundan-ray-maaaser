import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartASubCampaign from "./StartASubCampaign";
import { startASubCampaignStart,startASubCampaignClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.startASubCampaign,
	loginData: (state) => state.login,
	campaignId: (state) => state.campaigns.campaignId,
	campaignDetailsdata: (state) => state.campaignDetails,
	

});
const mapDispatchToProps = (dispatch) => {
	return {
		startASubCampaignStart: (values) => dispatch(startASubCampaignStart(values)),
		startASubCampaignClear: () => dispatch(startASubCampaignClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartASubCampaign);
