import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LinkedAccounts from "./LinkedAccounts";
import { linkedAccountsStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.linkedAccounts,
});
const mapDispatchToProps = (dispatch) => {
	return {
		linkedAccounts: (values) => dispatch(linkedAccountsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LinkedAccounts);
