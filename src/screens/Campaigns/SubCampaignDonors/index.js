import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SubCampaignDonors from "./SubCampaignDonors";
import { subCampaignDonorsStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.subCampaignDonors,
	loginData: (state) => state.login,
	campaignId: (state) => state.campaigns.campaignId,
	subCampaignId: (state) => state.subCampaignsEdit.subCampaignId,
});
const mapDispatchToProps = (dispatch) => {
	return {
		subCampaignDonors: (values) => dispatch(subCampaignDonorsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SubCampaignDonors);
