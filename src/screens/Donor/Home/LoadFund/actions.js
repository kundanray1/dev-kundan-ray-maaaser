export const LOAD_FUND_START = "LOAD_FUND_START";
export const LOAD_FUND_SUCCESS = "LOAD_FUND_SUCCESS";
export const LOAD_FUND_FAIL = "LOAD_FUND_FAIL";

export const loadFundStart = (payload) => {
	return {
		type: LOAD_FUND_START,
		payload,
	};
};
export const loadFundSuccess = (payload) => ({
	type: LOAD_FUND_SUCCESS,
	payload,
});
export const loadFundFail = (payload) => ({
	type: LOAD_FUND_FAIL,
	payload,
});
