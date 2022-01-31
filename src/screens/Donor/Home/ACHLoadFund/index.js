import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ACHLoadFund from "./ACHLoadFund";
import { ACHLoadFundStart,ACHLoadFundClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.ACHLoadFund,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		ACHLoadFundStart: (values) => dispatch(ACHLoadFundStart(values)),
		ACHLoadFundClear: () => dispatch(ACHLoadFundClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ACHLoadFund);
