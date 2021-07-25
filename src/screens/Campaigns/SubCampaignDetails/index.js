import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SubCampaignDetails from "./SubCampaignDetails";
import { subCampaignDetailsStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.subCampaignDetails,
	loginData: (state) => state.login,
	subCampaignId: (state) => state.subCampaignsEdit.subCampaignId,
	campaignDonateNowConfirmationData: (state) => state.campaignDonateNowConfirmation,
});
const mapDispatchToProps = (dispatch) => {
	return {
		subCampaignDetails: (values) => dispatch(subCampaignDetailsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SubCampaignDetails);
