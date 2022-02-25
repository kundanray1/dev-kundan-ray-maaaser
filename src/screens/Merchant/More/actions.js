export const MERCHANTMORE_START = "MERCHANTMORE_START";
export const MERCHANTMORE_SUCCESS = "MERCHANTMORE_SUCCESS";
export const MERCHANTMORE_FAIL = "MERCHANTMORE_FAIL";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const LOGOUT_CLEAR = "LOGOUT_CLEAR";

export const USER_LOGGED_OUT = "USER_LOGGED_OUT";




export const merchantmoreStart = (payload) => {
	return {
		type: MERCHANTMORE_START,
		payload,
	};
};
export const merchantmoreSuccess = (payload) => ({
	type: MERCHANTMORE_SUCCESS,
	payload,
});
export const merchantmoreFail = (payload) => ({
	type: MERCHANTMORE_FAIL,
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
