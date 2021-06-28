export const VIEW_PROFILE_START = "VIEW_PROFILE_START";
export const VIEW_PROFILE_SUCCESS = "VIEW_PROFILE_SUCCESS";
export const VIEW_PROFILE_FAIL = "VIEW_PROFILE_FAIL";

export const viewProfileStart = (payload) => {
	return {
		type: VIEW_PROFILE_START,
		payload,
	};
};
export const viewProfileSuccess = (payload) => ({
	type: VIEW_PROFILE_SUCCESS,
	payload,
});
export const viewProfileFail = (payload) => ({
	type: VIEW_PROFILE_FAIL,
	payload,
});
