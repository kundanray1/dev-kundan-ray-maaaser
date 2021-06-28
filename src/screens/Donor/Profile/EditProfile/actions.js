export const EDIT_PROFILE_START = "EDIT_PROFILE_START";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAIL = "EDIT_PROFILE_FAIL";

export const editProfileStart = (payload) => {
	return {
		type: EDIT_PROFILE_START,
		payload,
	};
};
export const editProfileSuccess = (payload) => ({
	type: EDIT_PROFILE_SUCCESS,
	payload,
});
export const editProfileFail = (payload) => ({
	type: EDIT_PROFILE_FAIL,
	payload,
});
