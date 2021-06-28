import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Manual from "./Manual";
import { manualStart,manualReceiversStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.manual,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		manual: (values) => dispatch(manualStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Manual);
