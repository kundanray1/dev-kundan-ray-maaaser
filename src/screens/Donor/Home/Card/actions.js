export const CARD_START = "CARD_START";
export const CARD_SUCCESS = "CARD_SUCCESS";
export const CARD_FAIL = "CARD_FAIL";

export const cardStart = (payload) => {
	return {
		type: CARD_START,
		payload,
	};
};
export const cardSuccess = (payload) => ({
	type: CARD_SUCCESS,
	payload,
});
export const cardFail = (payload) => ({
	type: CARD_FAIL,
	payload,
});
