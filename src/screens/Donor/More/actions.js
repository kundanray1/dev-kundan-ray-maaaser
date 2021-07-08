export const MORE_START = "MORE_START";
export const MORE_SUCCESS = "MORE_SUCCESS";
export const MORE_FAIL = "MORE_FAIL";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const LOGOUT_CLEAR = "LOGOUT_CLEAR";

export const USER_LOGGED_OUT = "USER_LOGGED_OUT";




export const moreStart = (payload) => {
	return {
		type: MORE_START,
		payload,
	};
};
export const moreSuccess = (payload) => ({
	type: MORE_SUCCESS,
	payload,
});
export const moreFail = (payload) => ({
	type: MORE_FAIL,
	payload,
});

export const logoutStart = (payload) => {
	return {
		type: LOGOUT_START,
		payload,
	};
};
export const logoutSuccess = (payload) => ({
	type: LOGOUT_SUCCESS,
	payload,
});
export const logoutFail = (payload) => ({
	type: LOGOUT_FAIL,
	payload,
});

export const logoutClear = (payload) => ({
	type: LOGOUT_CLEAR,
	payload,
});

export const userLoggedOut = (payload) => ({
	type: USER_LOGGED_OUT,
	payload,
});
