export const CHANGE_PASSWORD_START = "CHANGE_PASSWORD_START";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAIL = "CHANGE_PASSWORD_FAIL";
export const CHANGE_PASSWORD_CLEAR = "CHANGE_PASSWORD_CLEAR";


export const changePasswordStart = (payload) => {
	return {
		type: CHANGE_PASSWORD_START,
		payload,
	};
};
export const changePasswordSuccess = (payload) => ({
	type: CHANGE_PASSWORD_SUCCESS,
	payload,
});
export const changePasswordFail = (payload) => ({
	type: CHANGE_PASSWORD_FAIL,
	payload,
});
export const changePasswordClear = (payload) => ({
	type: CHANGE_PASSWORD_CLEAR,
	payload,
});
