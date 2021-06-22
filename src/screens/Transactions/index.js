import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Transactions from "./Transactions";
import { transactionsStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.transactions,
});
const mapDispatchToProps = (dispatch) => {
	return {
		transactions: (values) => dispatch(transactionsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Transactions);
