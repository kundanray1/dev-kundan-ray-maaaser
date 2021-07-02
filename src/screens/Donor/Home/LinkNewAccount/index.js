import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LinkNewAccount from "./LinkNewAccount";
import { linkNewAccountStart,linkNewAccountClear,updateLinkNewAccountStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.linkNewAccount,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		linkNewAccount: (values) => dispatch(linkNewAccountStart(values)),
		linkNewAccountClear: () => dispatch(linkNewAccountClear()),
		updateLinkNewAccount: (values) => dispatch(updateLinkNewAccountStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LinkNewAccount);
