import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartACampaign from "./StartACampaign";
import { startACampaignStart,startACampaignClear,beneficiaryListStart } from "./actions";
import { imageUploadClear} from "./../../auth/LetsGetStartedDonor/actions";
import { startACampaignThirdDescriptionClear } from "./../StartACampaignThird/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.startACampaign,
	loginData: (state) => state.login,
	addBeneficiaryData: (state) => state.addBeneficiary,
});
const mapDispatchToProps = (dispatch) => {
	return {
		beneficiaryListStart: () => dispatch(beneficiaryListStart()),
		startACampaignStart: (values) => dispatch(startACampaignStart(values)),
		startACampaignClear: () => dispatch(startACampaignClear()),
		imageUploadClear: () => dispatch(imageUploadClear()),
		startACampaignThirdDescriptionClear: () => dispatch(startACampaignThirdDescriptionClear()),
	}
}



const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartACampaign);
