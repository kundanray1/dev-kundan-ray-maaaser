import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ScheduleDonationReceiverDetail from "./ScheduleDonationReceiverDetail";
import { scheduleDonationReceiverDetailStart,scheduleDonationReceiverDetailClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.scheduleDonationReceiverDetail,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		scheduleDonationReceiverDetailStart: (values) => dispatch(scheduleDonationReceiverDetailStart(values)),
		scheduleDonationReceiverDetailClear: () => dispatch(scheduleDonationReceiverDetailClear()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ScheduleDonationReceiverDetail);
