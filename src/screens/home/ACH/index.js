import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ACH from "./ACH";
import { ACHStart,loadAmountStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.ACH,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		ACH: (values) => dispatch(ACHStart(values)),
		loadAmount: (values) => dispatch(loadAmountStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ACH);
