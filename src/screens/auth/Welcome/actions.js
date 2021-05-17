export const CREATE_NEW_PASSWORD_START = "CREATE_NEW_PASSWORD_START";
export const CREATE_NEW_PASSWORD_SUCCESS = "CREATE_NEW_PASSWORD_SUCCESS";
export const CREATE_NEW_PASSWORD_FAIL = "CREATE_NEW_PASSWORD_FAIL";

export const createNewPasswordStart = (payload) => {
	return {
		type: CREATE_NEW_PASSWORD_START,
		payload,
	};
};
export const createNewPasswordSuccess = (payload) => ({
	type: CREATE_NEW_PASSWORD_SUCCESS,
	payload,
});
export const createNewPasswordFail = (payload) => ({
	type: CREATE_NEW_PASSWORD_FAIL,
	payload,
});
