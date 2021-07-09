import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import AllCampaigns from "./AllCampaigns";
import { campaignsStart } from "./actions";
import { campaignId } from "./../actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.allCampaigns,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
		allCampaigns: (values) => dispatch(allCampaignsStart(values)),
		campaignId: (values) => dispatch(campaignId(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AllCampaigns);
