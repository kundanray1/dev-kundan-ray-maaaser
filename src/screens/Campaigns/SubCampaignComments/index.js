import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SubCampaignComments from "./SubCampaignComments";
import { campaignCommentsStart } from "./actions";
const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaignComments,
	loginData: (state) => state.login,
	subCampaignId: (state) => state.subCampaignsEdit,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaignComments: () => dispatch(campaignCommentsStart()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SubCampaignComments);
