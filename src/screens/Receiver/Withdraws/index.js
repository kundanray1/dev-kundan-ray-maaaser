import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Transactions from "./Transactions";
// import { withdrawsStart,withdrawsSearchStart } from "./actions";
import { transactionsStart,searchStart } from "./../../Donor/Transactions/actions";

const mapStateToProps = createStructuredSelector({
	// data: (state) => state.withdraws,
	data: (state) => state.transactions,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		// withdraws: (values) => dispatch(withdrawsStart(values)),
		// withdrawsSearch: (values) => dispatch(withdrawsSearchStart(values)),
		transactions: (values) => dispatch(transactionsStart(values)),
		search: (values) => dispatch(searchStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Transactions);

