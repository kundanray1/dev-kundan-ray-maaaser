import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonorReceiver from "./DonorReceiver";
import { donorReceiverStart,balanceStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donorReceiver,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
		donorReceiver: (values) => dispatch(donorReceiverStart(values)),
		balance: (values) => dispatch(balanceStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonorReceiver);
