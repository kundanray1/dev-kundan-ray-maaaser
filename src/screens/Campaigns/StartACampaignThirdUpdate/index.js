import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartACampaignThirdUpdate from "./StartACampaignThirdUpdate";
import { startACampaignThirdUpdateStart,startACampaignThirdUpdateClear } from "./actions";
import { imageUploadClear } from "./../../auth/LetsGetStartedDonor/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.startACampaignThirdUpdate,
	loginData: (state) => state.login,
	letsGetStartedDonorData: (state) => state.letsGetStartedDonor,
});
const mapDispatchToProps = (dispatch) => {
	return {
		startACampaignThirdUpdateStart: (values) => dispatch(startACampaignThirdUpdateStart(values)),
		startACampaignThirdUpdateClear: () => dispatch(startACampaignThirdUpdateClear()),
		imageUploadClear: () => dispatch(imageUploadClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartACampaignThirdUpdate);
