import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Transactions from "./Transactions";
import { transactionsStart,searchStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.transactions,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		transactions: (values) => dispatch(transactionsStart(values)),
		search: (values) => dispatch(searchStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Transactions);
