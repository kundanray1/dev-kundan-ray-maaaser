import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonateNow from "./DonateNow";
import { donateNowStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donateNow,
});
const mapDispatchToProps = (dispatch) => {
	return {
		donateNow: (values) => dispatch(donateNowStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonateNow);
