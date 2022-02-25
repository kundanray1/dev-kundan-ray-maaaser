import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import MerchantDashboard from "./MerchantDashboard";
import { merchantDashboardStart,balanceStart } from "./actions";
import { allCampaignsStart } from "./../../../Campaigns/AllCampaigns/actions";
import { campaignId,campaignsStart } from "./../../../Campaigns/actions";
import { receiversStart } from "./../../../Donor/Home/Receivers/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.merchantDashboard,
	loginData: (state) => state.login,
	// donationReceivedData: (state) => state.donationReceived,
	// donorsData: (state) => state.donors,
	// receiverProfileData: (state) => state.receiverProfile,
	allCampaignsData: (state) => state.allCampaigns,
	campaignsData: (state) => state.campaigns,


});
const mapDispatchToProps = (dispatch) => {
	return {
		merchantDashboard: (values) => dispatch(merchantDashboardStart(values)),
		balance: (values) => dispatch(balanceStart(values)),
		// donationReceived: (values) => dispatch(donationReceivedStart(values)),
		allCampaigns: (values) => dispatch(allCampaignsStart(values)),
		campaignId: (values) => dispatch(campaignId(values)),
		campaigns: (values) => dispatch(campaignsStart(values)),
	
	};
};




const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(MerchantDashboard);
