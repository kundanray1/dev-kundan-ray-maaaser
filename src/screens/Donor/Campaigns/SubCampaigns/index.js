import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SubCampaigns from "./SubCampaigns";
import { subCampaignsStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.subCampaigns,
});
const mapDispatchToProps = (dispatch) => {
	return {
		subCampaigns: (values) => dispatch(subCampaignsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SubCampaigns);
