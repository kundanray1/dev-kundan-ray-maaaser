import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithdrawFund from "./WithdrawFund";
import { withdrawFundStart,withdrawFundClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.withdrawFund,
});
const mapDispatchToProps = (dispatch) => {
	return {
		withdrawFundStart: (values) => dispatch(withdrawFundStart(values)),
		withdrawFundClear: () => dispatch(withdrawFundClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(WithdrawFund);
