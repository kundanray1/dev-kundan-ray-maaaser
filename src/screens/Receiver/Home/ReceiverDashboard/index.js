import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ReceiverDashboard from "./ReceiverDashboard";
import { receiverDashboardStart,balanceStart } from "./actions";
import { donationReceivedStart } from "./../DonationReceived/actions";
import { donorsStart } from "./../Donors/actions";
import { receiverProfileStart } from "./../../ReceiverProfile/actions";
import { allCampaignsStart } from "./../../../Campaigns/AllCampaigns/actions";
import { campaignId,campaignsStart } from "./../../../Campaigns/actions";


const mapStateToProps = createStructuredSelector({
	data: (state) => state.receiverDashboard,
	loginData: (state) => state.login,
	donationReceivedData: (state) => state.donationReceived,
	donorsData: (state) => state.donors,
	receiverProfileData: (state) => state.receiverProfile,
	allCampaignsData: (state) => state.allCampaigns,
	campaignsData: (state) => state.campaigns,
});
const mapDispatchToProps = (dispatch) => {
	return {
		receiverDashboard: (values) => dispatch(receiverDashboardStart(values)),
		balance: (values) => dispatch(balanceStart(values)),
		donationReceived: (values) => dispatch(donationReceivedStart(values)),
		donors: () => dispatch(donorsStart()),
		receiverProfile: (values) => dispatch(receiverProfileStart(values)),
		allCampaigns: (values) => dispatch(allCampaignsStart(values)),
		campaignId: (values) => dispatch(campaignId(values)),
		campaigns: (values) => dispatch(campaignsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ReceiverDashboard);
