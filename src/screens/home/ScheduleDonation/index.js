import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ScheduleDonation from "./ScheduleDonation";
import { loginStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		login: (values) => dispatch(loginStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ScheduleDonation);
