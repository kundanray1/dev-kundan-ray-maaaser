import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import StartACampaignUpdate from "./StartACampaignUpdate";
import { startACampaignStart,startACampaignClear } from "./actions";
import { startACampaignThirdUpdateStart,startACampaignThirdUpdateClear } from "./../StartACampaignThirdUpdate/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.startACampaignThirdUpdate,
	loginData: (state) => state.login,
	receiversData: (state) => state.receivers,

});
const mapDispatchToProps = (dispatch) => {
	return {
		startACampaignThirdUpdateStart: (values) => dispatch(startACampaignThirdUpdateStart(values)),
		startACampaignThirdUpdateClear: () => dispatch(startACampaignThirdUpdateClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(StartACampaignUpdate);
