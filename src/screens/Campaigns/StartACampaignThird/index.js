import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartACampaignThird from "./StartACampaignThird";
import { startACampaignThirdStart,startACampaignThirdClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.startACampaignThird,
	loginData: (state) => state.login,
	letsGetStartedDonorData: (state) => state.letsGetStartedDonor,
});
const mapDispatchToProps = (dispatch) => {
	return {
		startACampaignThirdStart: (values) => dispatch(startACampaignThirdStart(values)),
		startACampaignThirdClear: () => dispatch(startACampaignThirdClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartACampaignThird);
