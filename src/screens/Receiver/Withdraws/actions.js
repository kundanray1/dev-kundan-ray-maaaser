export const WITHDRAWS_START = "WITHDRAWS_START";
export const WITHDRAWS_SUCCESS = "WITHDRAWS_SUCCESS";
export const WITHDRAWS_FAIL = "WITHDRAWS_FAIL";

export const WITHDRAWS_SEARCH_START = "WITHDRAWS_SEARCH_START";
export const WITHDRAWS_SEARCH_SUCCESS = "WITHDRAWS_SEARCH_SUCCESS";
export const WITHDRAWS_SEARCH_FAIL = "WITHDRAWS_SEARCH_FAIL";


export const withdrawsStart = (payload) => {
	return {
		type: WITHDRAWS_START,
		payload,
	};
};
export const withdrawsSuccess = (payload) => ({
	type: WITHDRAWS_SUCCESS,
	payload,
});
export const withdrawsFail = (payload) => ({
	type: WITHDRAWS_FAIL,
	payload,
});

export const withdrawsSearchStart = (payload) => {
	return {
		type: WITHDRAWS_SEARCH_START,
		payload,
	};
};
export const withdrawsSearchSuccess = (payload) => ({
	type: WITHDRAWS_SEARCH_SUCCESS,
	payload,
});
export const withdrawsSearchFail = (payload) => ({
	type: WITHDRAWS_SEARCH_FAIL,
	payload,
});
