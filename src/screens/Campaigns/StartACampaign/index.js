import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartACampaign from "./StartACampaign";
import { startACampaignStart,startACampaignClear } from "./actions";
import { imageUploadClear} from "./../../auth/LetsGetStartedDonor/actions";
import { startACampaignThirdDescriptionClear } from "./../StartACampaignThird/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.startACampaign,
	loginData: (state) => state.login,
	receiversData: (state) => state.receivers,

});
const mapDispatchToProps = (dispatch) => {
	return {
		startACampaignStart: (values) => dispatch(startACampaignStart(values)),
		startACampaignClear: () => dispatch(startACampaignClear()),
		imageUploadClear: () => dispatch(imageUploadClear()),
		startACampaignThirdDescriptionClear: () => dispatch(startACampaignThirdDescriptionClear()),
	}
}



const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartACampaign);
