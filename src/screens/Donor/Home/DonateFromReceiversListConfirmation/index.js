import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonateFromReceiversListConfirmation from "./DonateFromReceiversListConfirmation";
import { donateFromReceiversListConfirmationStart, donateFromReceiversListConfirmationClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donateFromReceiversListConfirmation,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
	 donateFromReceiversListConfirmationStart: (values) => dispatch(donateFromReceiversListConfirmationStart(values)),
	 donateFromReceiversListConfirmationClear: () => dispatch(donateFromReceiversListConfirmationClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonateFromReceiversListConfirmation);
