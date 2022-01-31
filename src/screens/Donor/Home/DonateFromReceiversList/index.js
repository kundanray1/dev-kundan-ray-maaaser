import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonateFromReceiversList from "./DonateFromReceiversList";
import { receiverProfileStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donateViaScan,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		receiverProfile: (values) => dispatch(receiverProfileStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonateFromReceiversList);
