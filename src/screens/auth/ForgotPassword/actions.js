export const FORGOT_PASSWORD_START = "FORGOT_PASSWORD_START";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL";
export const FORGOT_PASSWORD_CLEAR = "FORGOT_PASSWORD_CLEAR";

export const forgotPasswordStart = (payload) => {
	return {
		type: FORGOT_PASSWORD_START,
		payload,
	};
};
export const forgotPasswordSuccess = (payload) => ({
	type: FORGOT_PASSWORD_SUCCESS,
	payload,
});
export const forgotPasswordFail = (payload) => ({
	type: FORGOT_PASSWORD_FAIL,
	payload,
});

export const forgotPasswordClear = (payload) => ({
	type: FORGOT_PASSWORD_CLEAR,
	payload,
});
