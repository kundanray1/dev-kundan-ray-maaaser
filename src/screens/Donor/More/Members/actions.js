export const MEMBERS_START = "MEMBERS_START";
export const MEMBERS_SUCCESS = "MEMBERS_SUCCESS";
export const MEMBERS_FAIL = "MEMBERS_FAIL";

export const membersStart = (payload) => {
	return {
		type: MEMBERS_START,
		payload,
	};
};
export const membersSuccess = (payload) => ({
	type: MEMBERS_SUCCESS,
	payload,
});

export const membersFail = (payload) => ({
	type: MEMBERS_FAIL,
	payload,
});

