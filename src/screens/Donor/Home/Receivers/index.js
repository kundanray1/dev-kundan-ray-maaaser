import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Receivers from "./Receivers";
import { receiversStart } from "./actions";
import { manualDonateConfirmationStart,manualDonateConfirmationClear } from "./../ManualDonateConfirmation/actions";
const mapStateToProps = createStructuredSelector({
	data: (state) => state.receivers,
	loginData: (state) => state.login,
	manualDonateConfirmationData: (state) => state.manualDonateConfirmation,
});
const mapDispatchToProps = (dispatch) => {
	return {
		receivers: () => dispatch(receiversStart()),
		manualDonateConfirmationStart: (values) => dispatch(manualDonateConfirmationStart(values)),
		manualDonateConfirmationClear: () => dispatch(manualDonateConfirmationClear()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Receivers);
