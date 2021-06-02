export const VERIFICATION_START = "VERIFICATION_START";
export const VERIFICATION_SUCCESS = "VERIFICATION_SUCCESS";
export const VERIFICATION_FAIL = "VERIFICATION_FAIL";
export const VERIFICATION_CLEAR = "VERIFICATION_CLEAR";

export const verificationStart = (payload) => {
	return {
		type: VERIFICATION_START,
		payload,
	};
};
export const verificationSuccess = (payload) => ({
	type: VERIFICATION_SUCCESS,
	payload,
});
export const verificationFail = (payload) => ({
	type: VERIFICATION_FAIL,
	payload,
});
export const verificationClear = (payload) => ({
	type: VERIFICATION_CLEAR,
	payload,
});
