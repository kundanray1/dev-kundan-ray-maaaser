export const LOAD_FUND_DETAILS_START = "LOAD_FUND_DETAILS_START";
export const LOAD_FUND_DETAILS_SUCCESS = "LOAD_FUND_DETAILS_SUCCESS";
export const LOAD_FUND_DETAILS_FAIL = "LOAD_FUND_DETAILS_FAIL";
export const LOAD_FUND_DETAILS_CLEAR = "LOAD_FUND_DETAILS_CLEAR";


export const loadFundDetailsStart = (payload) => {
	return {
		type: LOAD_FUND_DETAILS_START,
		payload,
	};
};
export const loadFundDetailsSuccess = (payload) => ({
	type: LOAD_FUND_DETAILS_SUCCESS,
	payload,
});
export const loadFundDetailsFail = (payload) => ({
	type: LOAD_FUND_DETAILS_FAIL,
	payload,
});
export const loadFundDetailsClear = (payload) => ({
	type: LOAD_FUND_DETAILS_CLEAR,
	payload,
});
