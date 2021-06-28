export const UPCOMING_DONATIONS_START = "UPCOMING_DONATIONS_START";
export const UPCOMING_DONATIONS_SUCCESS = "UPCOMING_DONATIONS_SUCCESS";
export const UPCOMING_DONATIONS_FAIL = "UPCOMING_DONATIONS_FAIL";

export const upcomingDonationsStart = (payload) => {
	return {
		type: UPCOMING_DONATIONS_START,
		payload,
	};
};
export const upcomingDonationsSuccess = (payload) => ({
	type: UPCOMING_DONATIONS_SUCCESS,
	payload,
});
export const upcomingDonationsFail = (payload) => ({
	type: UPCOMING_DONATIONS_FAIL,
	payload,
});
