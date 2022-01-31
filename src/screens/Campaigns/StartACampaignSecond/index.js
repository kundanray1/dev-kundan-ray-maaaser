import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartACampaignSecond from "./StartACampaignSecond";
import { startACampaignStart,startACampaignClear } from "./actions";
import { imageUploadStart,imageUploadClear} from "./../../auth/LetsGetStartedDonor/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.startACampaign,
	loginData: (state) => state.login,
	letsGetStartedDonorData: (state) => state.letsGetStartedDonor,
});
const mapDispatchToProps = (dispatch) => {
	return {
		startACampaignStart: (values) => dispatch(startACampaignStart(values)),
		startACampaignClear: () => dispatch(startACampaignClear()),
		imageUpload: (values) => dispatch(imageUploadStart(values)),
		imageUploadClear: (values) => dispatch(imageUploadClear(values)),

	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartACampaignSecond);
