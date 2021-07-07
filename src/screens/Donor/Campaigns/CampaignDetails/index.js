import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CampaignDetails from "./CampaignDetails";
import { campaignsStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaigns,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
		campaigns: (values) => dispatch(campaignsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CampaignDetails);
