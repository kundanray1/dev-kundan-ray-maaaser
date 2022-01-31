import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import UpcomingDonations from "./UpcomingDonations";
import { upcomingDonationsStart,upcomingDonationsSearchStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.upcomingDonations,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		upcomingDonations: (values) => dispatch(upcomingDonationsStart(values)),
		upcomingDonationsSearch: (values) => dispatch(upcomingDonationsSearchStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(UpcomingDonations);
