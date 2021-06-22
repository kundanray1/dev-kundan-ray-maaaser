import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import UpcomingDonations from "./UpcomingDonations";
import { upcomingDonationsStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.upcomingDonations,
});
const mapDispatchToProps = (dispatch) => {
	return {
		upcomingDonations: (values) => dispatch(upcomingDonationsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(UpcomingDonations);
