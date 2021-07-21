import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ScheduleDonation from "./ScheduleDonation";
import { scheduleDonationStart,scheduleDonationSearchStart } from "./actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.scheduleDonation,
	loginData: (state) => state.login,
	linkScheduleDonationData: (state) => state.linkScheduleDonation,
	scheduleDonationReceiverDetailData: (state) => state.scheduleDonationReceiverDetail,
});
const mapDispatchToProps = (dispatch) => {
	return {
		scheduleDonation: (values) => dispatch(scheduleDonationStart(values)),
		scheduleDonationSearch: (values) => dispatch(scheduleDonationSearchStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ScheduleDonation);
