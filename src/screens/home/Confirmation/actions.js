export const WELCOME_START = "WELCOME_START";
export const WELCOME_SUCCESS = "WELCOME_SUCCESS";
export const WELCOME_FAIL = "WELCOME_FAIL";

export const welcomeStart = (payload) => {
	return {
		type: WELCOME_START,
		payload,
	};
};
export const welcomeSuccess = (payload) => ({
	type: WELCOME_SUCCESS,
	payload,
});
export const welcomeFail = (payload) => ({
	type: WELCOME_FAIL,
	payload,
});
