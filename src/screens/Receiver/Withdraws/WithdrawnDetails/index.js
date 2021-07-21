import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithdrawnDetails from "./WithdrawnDetails";
import { withdrawnDetailsStart,withdrawnDetailsClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.withdrawnDetails,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		withdrawnDetailsStart: (values) => dispatch(withdrawnDetailsStart(values)),
		withdrawnDetailsClear: () => dispatch(withdrawnDetailsClear()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(WithdrawnDetails);
