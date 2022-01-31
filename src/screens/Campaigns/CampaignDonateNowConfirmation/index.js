import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CampaignDonateNowConfirmation from "./CampaignDonateNowConfirmation";
import { campaginDonateNowConfirmationStart,campaignDonateNowConfirmationClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaignDonateNowConfirmation,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaignDonateNowConfirmationStart: (values) => dispatch(campaginDonateNowConfirmationStart(values)),
		campaignDonateNowConfirmationClear: () => dispatch(campaignDonateNowConfirmationClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CampaignDonateNowConfirmation);
