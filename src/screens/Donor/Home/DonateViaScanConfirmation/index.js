import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonateViaScanConfirmation from "./DonateViaScanConfirmation";
import { donateViaScanConfirmationStart, donateViaScanConfirmationClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donateViaScanConfirmation,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
	 donateViaScanConfirmationStart: (values) => dispatch(donateViaScanConfirmationStart(values)),
	 donateViaScanConfirmationClear: () => dispatch(donateViaScanConfirmationClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonateViaScanConfirmation);
