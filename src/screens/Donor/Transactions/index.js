import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Transactions from "./Transactions";
import { transactionsStart,searchStart,generateTransactionsPDFReceiptStart,
generateTransactionsExcelReceiptStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.transactions,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		transactions: (values) => dispatch(transactionsStart(values)),
		search: (values) => dispatch(searchStart(values)),
		generateTransactionsPDFReceiptStart: (values) => dispatch(generateTransactionsPDFReceiptStart(values)),
		generateTransactionsExcelReceiptStart: (values) => dispatch(generateTransactionsExcelReceiptStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Transactions);
