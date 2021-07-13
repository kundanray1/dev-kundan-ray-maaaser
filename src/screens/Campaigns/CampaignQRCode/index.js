import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CampaignQRCode from "./CampaignQRCode";
import { campaignQRCodeStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.campaignQRCode,
	campaignDetailsdata: (state) => state.campaignDetails,
});
const mapDispatchToProps = (dispatch) => {
	return {
		campaignQRCode: (values) => dispatch(campaignQRCodeStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CampaignQRCode);
