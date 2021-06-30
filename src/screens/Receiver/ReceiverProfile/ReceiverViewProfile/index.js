import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ReceiverViewProfile from "./ReceiverViewProfile";
import { receiverViewProfileStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.receiverViewProfile,
	loginData: (state) => state.login,
	receiverProfileData: (state) => state.receiverProfile,
});
const mapDispatchToProps = (dispatch) => {
	return {
		receiverViewProfile: (values) => dispatch(receiverViewProfileStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ReceiverViewProfile);
