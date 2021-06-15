import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ScanQRCode from "./ScanQRCode";
import { welcomeStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.welcome,
});
const mapDispatchToProps = (dispatch) => {
	return {
		welcome: (values) => dispatch(welcomeStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ScanQRCode);
