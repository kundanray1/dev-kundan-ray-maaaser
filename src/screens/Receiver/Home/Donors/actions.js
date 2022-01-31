export const DONORS_START = "DONORS_START";
export const DONORS_SUCCESS = "DONORS_SUCCESS";
export const DONORS_FAIL = "DONORS_FAIL";

export const donorsStart = (payload) => {
	return {
		type: DONORS_START,
		payload,
	};
};
export const donorsSuccess = (payload) => ({
	type: DONORS_SUCCESS,
	payload,
});
export const donorsFail = (payload) => ({
	type: DONORS_FAIL,
	payload,
});
