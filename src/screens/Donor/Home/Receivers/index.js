import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Receivers from "./Receivers";
import { receiversStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.receivers,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		receivers: () => dispatch(receiversStart()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Receivers);
