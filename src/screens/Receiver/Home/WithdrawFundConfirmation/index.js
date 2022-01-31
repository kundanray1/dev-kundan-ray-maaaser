import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithdrawFundConfirmation from "./WithdrawFundConfirmation";
import { withdrawFundConfirmationStart,withdrawFundConfirmationClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.withdrawFundConfirmation,
});
const mapDispatchToProps = (dispatch) => {
	return {
		withdrawFundConfirmationStart: (values) => dispatch(withdrawFundConfirmationStart(values)),
		withdrawFundConfirmationClear: () => dispatch(withdrawFundConfirmationClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(WithdrawFundConfirmation);
