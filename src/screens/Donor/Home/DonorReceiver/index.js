import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import DonorReceiver from "./DonorReceiver";
import { donorReceiverStart,balanceStart } from "./actions";
import { donationsMadeStart } from "./../DonationsMade/actions";
import { upcomingDonationsStart } from "./../UpcomingDonations/actions";
import { receiversStart } from "./../Receivers/actions";
import { manualDonateConfirmationStart,manualDonateConfirmationClear } from "./../ManualDonateConfirmation/actions";
import { profileStart } from "./../../Profile/actions";
import { allCampaignsStart } from "./../../Campaigns/AllCampaigns/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.donorReceiver,
	loginData: (state) => state.login,
	profileData: (state) => state.profile,
	donationsMadeData: (state) => state.donationsMade,
	upcomingDonationsData: (state) => state.upcomingDonations,
	receiversData: (state) => state.receivers,
	manualDonateConfirmationData: (state) => state.manualDonateConfirmation,
	allCampaignsData: (state) => state.allCampaigns,
});
const mapDispatchToProps = (dispatch) => {
	return {
		donorReceiver: (values) => dispatch(donorReceiverStart(values)),
		balance: (values) => dispatch(balanceStart(values)),
		upcomingDonations: (values) => dispatch(upcomingDonationsStart(values)),
		donationsMade: (values) => dispatch(donationsMadeStart(values)),
		receivers: () => dispatch(receiversStart()),
		manualDonateConfirmationStart: (values) => dispatch(manualDonateConfirmationStart(values)),
		manualDonateConfirmationClear: () => dispatch(manualDonateConfirmationClear()),
		profile: (values) => dispatch(profileStart(values)),
		allCampaigns: (values) => dispatch(allCampaignsStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DonorReceiver);
