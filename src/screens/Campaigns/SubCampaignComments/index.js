import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SubCampaignComments from "./SubCampaignComments";
import { subCampaignCommentsStart, postSubCampaignCommentsStart} from "./actions";
const mapStateToProps = createStructuredSelector({
	data: (state) => state.subCampaignComments,
	loginData: (state) => state.login,
	subCampaignId: (state) => state.subCampaignsEdit.subCampaignId,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		subCampaignComments: (values) => dispatch(subCampaignCommentsStart(values)),
		postSubCampaignComments: (values) => dispatch(postSubCampaignCommentsStart(values)),
	};
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(SubCampaignComments);
