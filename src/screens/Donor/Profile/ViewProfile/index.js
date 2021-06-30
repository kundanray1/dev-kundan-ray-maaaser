import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ViewProfile from "./ViewProfile";
import { viewProfileStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.viewProfile,
	profileData: (state) => state.profile,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		viewProfile: (values) => dispatch(viewProfileStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ViewProfile);
