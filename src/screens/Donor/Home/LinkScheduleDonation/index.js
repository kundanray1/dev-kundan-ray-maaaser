import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LinkScheduleDonation from "./LinkScheduleDonation";
import { linkScheduleDonationStart,updateLinkScheduleDonationStart,linkScheduleDonationClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.linkScheduleDonation,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		linkScheduleDonation: (values) => dispatch(linkScheduleDonationStart(values)),
		linkScheduleDonationClear: () => dispatch(linkScheduleDonationStart()),
		updateLinkScheduleDonation: (values) => dispatch(updateLinkScheduleDonationStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LinkScheduleDonation);
