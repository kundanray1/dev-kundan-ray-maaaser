import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import reducer from "./reducer";
import saga from "./saga";
import Verification from "./Verification";
import { verificationStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.verification,
});
const mapDispatchToProps = (dispatch) => {
	return {
		verification: (values) => dispatch(verificationStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Verification);
