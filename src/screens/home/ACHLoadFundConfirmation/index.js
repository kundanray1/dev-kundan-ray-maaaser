import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ACHLoadFundConfirmation from "./ACHLoadFundConfirmation";
import { ACHLoadFundConfirmationStart,ACHLoadFundConfirmationClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.ACHLoadFundConfirmation,
});
const mapDispatchToProps = (dispatch) => {
	return {
		ACHLoadFundConfirmationStart: (values) => dispatch(ACHLoadFundConfirmationStart(values)),
		ACHLoadFundConfirmationClear: () => dispatch(ACHLoadFundConfirmationClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ACHLoadFundConfirmation);
