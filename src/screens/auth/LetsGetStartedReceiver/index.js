import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LetsGetStartedReceiver from "./LetsGetStartedReceiver";
import { letsGetStartedReceiverStart } from "./actions";
//using same method and saga for image upload
import { imageUploadStart,imageUploadClear } from "./../LetsGetStartedDonor/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.letsGetStartedReceiver,
	letsGetStartedDonorData: (state) => state.letsGetStartedDonor,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
		letsGetStartedReceiver: (values) => dispatch(letsGetStartedReceiverStart(values)),
		imageUpload: (values) => dispatch(imageUploadStart(values)),
		imageUploadClear: (values) => dispatch(imageUploadClear(values)),
		
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LetsGetStartedReceiver);
