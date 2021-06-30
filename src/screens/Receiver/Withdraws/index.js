import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Withdraws from "./Withdraws";
import { withdrawsStart,withdrawsSearchStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.withdraws,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		withdraws: (values) => dispatch(withdrawsStart(values)),
		withdrawsSearch: (values) => dispatch(withdrawsSearchStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Withdraws);
