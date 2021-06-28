export const CONFIRMATION_START = "CONFIRMATION_START";
export const CONFIRMATION_SUCCESS = "CONFIRMATION_SUCCESS";
export const CONFIRMATION_FAIL = "CONFIRMATION_FAIL";

export const confirmationStart = (payload) => {
	return {
		type: CONFIRMATION_START,
		payload,
	};
};
export const confirmationSuccess = (payload) => ({
	type: CONFIRMATION_SUCCESS,
	payload,
});
export const confirmationFail = (payload) => ({
	type: CONFIRMATION_FAIL,
	payload,
});
