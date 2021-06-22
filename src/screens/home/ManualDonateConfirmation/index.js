import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ManualDonateConfirmation from "./ManualDonateConfirmation";
import { manualDonateConfirmationStart,manualDonateConfirmationClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.manualDonateConfirmation,
});
const mapDispatchToProps = (dispatch) => {
	return {
		manualDonateConfirmationStart: (values) => dispatch(manualDonateConfirmationStart(values)),
		manualDonateConfirmationClear: () => dispatch(manualDonateConfirmationClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ManualDonateConfirmation);
