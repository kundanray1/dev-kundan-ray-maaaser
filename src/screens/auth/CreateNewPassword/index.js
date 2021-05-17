import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import reducer from "./reducer";
import saga from "./saga";
import CreateNewPassword from "./CreateNewPassword";
import { createNewPasswordStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.createNewPassword,
});
const mapDispatchToProps = (dispatch) => {
	return {
		createNewPassword: (values) => dispatch(createNewPasswordStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CreateNewPassword);
