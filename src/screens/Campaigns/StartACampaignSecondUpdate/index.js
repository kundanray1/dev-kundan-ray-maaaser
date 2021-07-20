import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartACampaignSecondUpdate from "./StartACampaignSecondUpdate";
import { startACampaignStart,startACampaignClear } from "./actions";
import { imageUploadStart,imageUploadClear } from "./../../auth/LetsGetStartedDonor/actions";
import { startACampaignThirdUpdateStart,startACampaignThirdUpdateClear } from "./../StartACampaignThirdUpdate/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.startACampaignThirdUpdate,
	loginData: (state) => state.login,
	letsGetStartedDonorData: (state) => state.letsGetStartedDonor,
});
const mapDispatchToProps = (dispatch) => {
	return {
		imageUpload: (values) => dispatch(imageUploadStart(values)),
		imageUploadClear: (values) => dispatch(imageUploadClear(values)),
		imageUpload: (values) => dispatch(imageUploadStart(values)),
		startACampaignThirdUpdateStart: (values) => dispatch(startACampaignThirdUpdateStart(values)),
		startACampaignThirdUpdateClear: () => dispatch(startACampaignThirdUpdateClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartACampaignSecondUpdate);
