import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import SubCampaignQRCode from "./SubCampaignQRCode";
import { campaignQRCodeStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.subCampaignDetails,
	subCampaignId: (state) => state.subCampaignsEdit.subCampaignId,
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaignQRCode: (values) => dispatch(campaignQRCodeStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SubCampaignQRCode);
