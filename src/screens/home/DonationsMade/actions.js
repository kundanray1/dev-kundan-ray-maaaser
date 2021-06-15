export const DONATIONS_MADE_START = "DONATIONS_MADE_START";
export const DONATIONS_MADE_SUCCESS = "DONATIONS_MADE_SUCCESS";
export const DONATIONS_MADE_FAIL = "DONATIONS_MADE_FAIL";

export const donationsMadeStart = (payload) => {
	return {
		type: DONATIONS_MADE_START,
		payload,
	};
};
export const donationsMadeSuccess = (payload) => ({
	type: DONATIONS_MADE_SUCCESS,
	payload,
});
export const donationsMadeFail = (payload) => ({
	type: DONATIONS_MADE_FAIL,
	payload,
});
