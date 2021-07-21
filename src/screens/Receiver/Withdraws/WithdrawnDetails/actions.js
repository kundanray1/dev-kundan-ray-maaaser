export const WITHDRAWN_DETAILS_START = "WITHDRAWN_DETAILS_START";
export const WITHDRAWN_DETAILS_SUCCESS = "WITHDRAWN_DETAILS_SUCCESS";
export const WITHDRAWN_DETAILS_FAIL = "WITHDRAWN_DETAILS_FAIL";
export const WITHDRAWN_DETAILS_CLEAR = "WITHDRAWN_DETAILS_CLEAR";


export const withdrawnDetailsStart = (payload) => {
	return {
		type: WITHDRAWN_DETAILS_START,
		payload,
	};
};
export const withdrawnDetailsSuccess = (payload) => ({
	type: WITHDRAWN_DETAILS_SUCCESS,
	payload,
});
export const withdrawnDetailsFail = (payload) => ({
	type: WITHDRAWN_DETAILS_FAIL,
	payload,
});
export const withdrawnDetailsClear = (payload) => ({
	type: WITHDRAWN_DETAILS_CLEAR,
	payload,
});
