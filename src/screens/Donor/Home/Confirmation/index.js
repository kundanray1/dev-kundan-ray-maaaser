import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Confirmation from "./Confirmation";
import { confirmationStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.confirmation,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		confirmation: (values) => dispatch(confirmationStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Confirmation);
