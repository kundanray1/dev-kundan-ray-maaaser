import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Campaigns from "./Campaigns";
import { campaignsStart,campaignId } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaigns,
	loginData: (state) => state.login,
	startACampaignThirdData: (state) => state.startACampaignThird,
	startACampaignThirdUpdateData: (state) => state.startACampaignThirdUpdate,
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaigns: (values) => dispatch(campaignsStart(values)),
		campaignId: (values) => dispatch(campaignId(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Campaigns);
