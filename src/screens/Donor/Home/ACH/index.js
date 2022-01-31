import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ACH from "./ACH";
import { ACHStart,ACHUpdateStatusStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.ACH,
	linkNewAccountData: (state) => state.linkNewAccount,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
		ACH: (values) => dispatch(ACHStart(values)),
		ACHUpdateStatusStart: (values) => dispatch(ACHUpdateStatusStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ACH);
