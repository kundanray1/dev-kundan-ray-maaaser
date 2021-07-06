import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartACampaign from "./StartACampaign";
import { startACampaignStart,startACampaignClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.startACampaign,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		startACampaignStart: (values) => dispatch(startACampaignStart(values)),
		startACampaignClear: () => dispatch(startACampaignClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartACampaign);
