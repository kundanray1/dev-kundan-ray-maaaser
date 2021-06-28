import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ScheduleDonation from "./ScheduleDonation";
import { scheduleDonationStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.scheduleDonation,
	loginData: (state) => state.login,
	

});
const mapDispatchToProps = (dispatch) => {
	return {
		scheduleDonation: (values) => dispatch(scheduleDonationStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ScheduleDonation);
