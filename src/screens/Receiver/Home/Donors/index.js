import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Donors from "./Donors";
import { donorsStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donors,
});
const mapDispatchToProps = (dispatch) => {
	return {
		donors: () => dispatch(donorsStart()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Donors);
