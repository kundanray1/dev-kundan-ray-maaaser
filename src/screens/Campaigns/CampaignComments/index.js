import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CampaignComments from "./CampaignComments";
import { campaignCommentsStart,postCampaignCommentsStart } from "./actions";
const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaignComments,
	loginData: (state) => state.login,
	campaignId: (state) => state.campaigns.campaignId,
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaignComments: (values) => dispatch(campaignCommentsStart(values)),
		postCampaignComments: (values) => dispatch(postCampaignCommentsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CampaignComments);
