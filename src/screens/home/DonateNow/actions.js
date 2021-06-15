export const DONATE_NOW_START = "DONATE_NOW_START";
export const DONATE_NOW_SUCCESS = "DONATE_NOW_SUCCESS";
export const DONATE_NOW_FAIL = "DONATE_NOW_FAIL";

export const donateNowStart = (payload) => {
	return {
		type: DONATE_NOW_START,
		payload,
	};
};
export const donateNowSuccess = (payload) => ({
	type: DONATE_NOW_SUCCESS,
	payload,
});
export const donateNowFail = (payload) => ({
	type: DONATE_NOW_FAIL,
	payload,
});
