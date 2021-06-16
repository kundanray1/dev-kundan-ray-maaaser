import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LinkScheduleDonation from "./LinkScheduleDonation";
import { linkScheduleDonationStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		linkScheduleDonation: (values) => dispatch(linkScheduleDonationStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LinkScheduleDonation);
