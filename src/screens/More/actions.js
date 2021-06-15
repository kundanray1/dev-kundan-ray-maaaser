export const MORE_START = "MORE_START";
export const MORE_SUCCESS = "MORE_SUCCESS";
export const MORE_FAIL = "MORE_FAIL";

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
