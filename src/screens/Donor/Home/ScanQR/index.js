import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ScanQR from "./ScanQR";
import { scanQRDonateStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.scanQR,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		scanQRDonate: (values) => dispatch(scanQRDonateStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ScanQR);
