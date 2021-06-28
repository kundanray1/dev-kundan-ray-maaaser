export const PROFILE_START = "PROFILE_START";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAIL = "PROFILE_FAIL";

export const profileStart = (payload) => {
	return {
		type: PROFILE_START,
		payload,
	};
};
export const profileSuccess = (payload) => ({
	type: PROFILE_SUCCESS,
	payload,
});
export const profileFail = (payload) => ({
	type: PROFILE_FAIL,
	payload,
});
