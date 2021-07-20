import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartACampaignThird from "./StartACampaignThird";
import { startACampaignThirdStart,startACampaignThirdClear } from "./actions";
import { imageUploadClear} from "./../../auth/LetsGetStartedDonor/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.startACampaignThird,
	loginData: (state) => state.login,
	letsGetStartedDonorData: (state) => state.letsGetStartedDonor,
});
const mapDispatchToProps = (dispatch) => {
	return {
		startACampaignThirdStart: (values) => dispatch(startACampaignThirdStart(values)),
		startACampaignThirdClear: () => dispatch(startACampaignThirdClear()),
		imageUploadClear: (values) => dispatch(imageUploadClear(values)),

	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartACampaignThird);
