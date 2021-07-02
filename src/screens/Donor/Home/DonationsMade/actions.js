export const DONATIONS_MADE_START = "DONATIONS_MADE_START";
export const DONATIONS_MADE_SUCCESS = "DONATIONS_MADE_SUCCESS";
export const DONATIONS_MADE_FAIL = "DONATIONS_MADE_FAIL";
export const DONATIONS_MADE_SEARCH_START = "DONATIONS_MADE_SEARCH_START";
export const DONATIONS_MADE_SEARCH_SUCCESS = "DONATIONS_MADE_SEARCH_SUCCESS";
export const DONATIONS_MADE_SEARCH_FAIL = "DONATIONS_MADE_SEARCH_FAIL";

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

export const donationsMadeSearchStart = (payload) => {
	return {
		type: DONATIONS_MADE_SEARCH_START,
		payload,
	};
};
export const donationsMadeSearchSuccess = (payload) => ({
	type: DONATIONS_MADE_SEARCH_SUCCESS,
	payload,
});
export const donationsMadeSearchFail = (payload) => ({
	type: DONATIONS_MADE_SEARCH_FAIL,
	payload,
});
