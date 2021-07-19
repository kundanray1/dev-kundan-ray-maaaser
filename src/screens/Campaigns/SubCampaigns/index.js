import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SubCampaigns from "./SubCampaigns";
import { subCampaignsStart } from "./actions";
import { subCampaignId } from "./../CampaignSubCampaign/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.subCampaigns,
	loginData: (state) => state.login,
	startASubCampaignData: (state) => state.startASubCampaign,
	startASubCampaignUpdateData: (state) => state.startASubCampaignUpdate,
});
const mapDispatchToProps = (dispatch) => {
	return {
		subCampaigns: (values) => dispatch(subCampaignsStart(values)),
		subCampaignId: (values) => dispatch(subCampaignId(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SubCampaigns);
