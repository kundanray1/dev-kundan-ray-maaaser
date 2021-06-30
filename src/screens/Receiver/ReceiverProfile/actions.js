export const RECEIVER_PROFILE_START = "RECEIVER_PROFILE_START";
export const RECEIVER_PROFILE_SUCCESS = "RECEIVER_PROFILE_SUCCESS";
export const RECEIVER_PROFILE_FAIL = "RECEIVER_PROFILE_FAIL";

export const receiverProfileStart = (payload) => {
	return {
		type: RECEIVER_PROFILE_START,
		payload,
	};
};
export const receiverProfileSuccess = (payload) => ({
	type: RECEIVER_PROFILE_SUCCESS,
	payload,
});
export const receiverProfileFail = (payload) => ({
	type: RECEIVER_PROFILE_FAIL,
	payload,
});
