import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonorReceiver from "./DonorReceiver";
import { donorReceiverStart, balanceStart,donorReceiverDonateConfirmationStart,donorReceiverDonateConfirmationClear } from "./actions";
import { donationsMadeStart } from "./../DonationsMade/actions";
import { upcomingDonationsStart } from "./../UpcomingDonations/actions";
import { receiversStart } from "./../Receivers/actions";
import { profileStart } from "./../../Profile/actions";
import { allCampaignsStart } from "./../../../Campaigns/AllCampaigns/actions";
import { campaignsStart } from "./../../../Campaigns/actions";
import { campaignId } from "./../../../Campaigns/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donorReceiver,
	loginData: (state) => state.login,
	profileData: (state) => state.profile,
	donationsMadeData: (state) => state.donationsMade,
	upcomingDonationsData: (state) => state.upcomingDonations,
	receiversData: (state) => state.receivers,
	manualDonateConfirmationData: (state) => state.manualDonateConfirmation,
	allCampaignsData: (state) => state.allCampaigns,
	campaignsData: (state) => state.campaigns,
	ACHLoadFundConfirmationData: (state) => state.ACHLoadFundConfirmation,
	cardLoadFundConfirmationData: (state) => state.cardLoadFundConfirmation,
	linkScheduleDonationData: (state) => state.linkScheduleDonation,
	manualDonateConfirmationData: (state) => state.manualDonateConfirmation,
});
const mapDispatchToProps = (dispatch) => {
	return {
		donorReceiver: (values) => dispatch(donorReceiverStart(values)),
		balance: (values) => dispatch(balanceStart(values)),
		upcomingDonations: (values) => dispatch(upcomingDonationsStart(values)),
		donationsMade: (values) => dispatch(donationsMadeStart(values)),
		receivers: () => dispatch(receiversStart()),
		donorReceiverDonateConfirmation: (values) =>
			dispatch(donorReceiverDonateConfirmationStart(values)),
			donorReceiverDonateConfirmationClear: () =>
			dispatch(donorReceiverDonateConfirmationClear()),
			
		profile: (values) => dispatch(profileStart(values)),
		allCampaigns: (values) => dispatch(allCampaignsStart(values)),
		campaigns: (values) => dispatch(campaignsStart(values)),
		campaignId: (values) => dispatch(campaignId(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonorReceiver);
