import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LetsGetStartedReceiver from "./LetsGetStartedReceiver";
import { letsGetStartedReceiverStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.letsGetStartedReceiver,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
		letsGetStartedReceiver: (values) => dispatch(letsGetStartedReceiverStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LetsGetStartedReceiver);
