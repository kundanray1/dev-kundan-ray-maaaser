export const RECEIVER_VIEW_PROFILE_START = "RECEIVER_VIEW_PROFILE_START";
export const RECEIVER_VIEW_PROFILE_SUCCESS = "RECEIVER_VIEW_PROFILE_SUCCESS";
export const RECEIVER_VIEW_PROFILE_FAIL = "RECEIVER_VIEW_PROFILE_FAIL";

export const receiverViewProfileStart = (payload) => {
	return {
		type: RECEIVER_VIEW_PROFILE_START,
		payload,
	};
};
export const receiverViewProfileSuccess = (payload) => ({
	type: RECEIVER_VIEW_PROFILE_SUCCESS,
	payload,
});
export const receiverViewProfileFail = (payload) => ({
	type: RECEIVER_VIEW_PROFILE_FAIL,
	payload,
});
