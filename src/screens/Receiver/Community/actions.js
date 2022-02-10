export const COMMUNITY_START = "COMMUNITY_START";
export const COMMUNITY_SUCCESS = "COMMUNITY_SUCCESS";
export const COMMUNITY_FAIL = "COMMUNITY_FAIL";

export const communityStart = (payload) => {
	return {
		type: COMMUNITY_START,
		payload,
	};
};
export const communitySuccess = (payload) => ({
	type: COMMUNITY_SUCCESS,
	payload,
});
export const communityFail = (payload) => ({
	type: COMMUNITY_FAIL,
	payload,
});
