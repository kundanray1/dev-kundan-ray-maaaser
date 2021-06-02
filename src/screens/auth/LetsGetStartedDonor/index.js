import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LetsGetStartedDonor from "./LetsGetStartedDonor";
import { letsgetStartedDonorStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.letsGetStartedDonor,
	loginData: (state) => state.login

});
const mapDispatchToProps = (dispatch) => {
	return {
		letsGetStartedDonor: (values) => dispatch(letsgetStartedDonorStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LetsGetStartedDonor);
