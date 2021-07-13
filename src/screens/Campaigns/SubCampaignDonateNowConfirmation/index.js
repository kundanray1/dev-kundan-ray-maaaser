import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SubCampaignDonateNowConfirmation from "./SubCampaignDonateNowConfirmation";
import { subCampaginDonateNowConfirmationStart,subCampaignDonateNowConfirmationClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaignDonateNowConfirmation,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		subCampaignDonateNowConfirmationStart: (values) => dispatch(subCampaginDonateNowConfirmationStart(values)),
		subCampaignDonateNowConfirmationClear: () => dispatch(subCampaignDonateNowConfirmationClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SubCampaignDonateNowConfirmation);
