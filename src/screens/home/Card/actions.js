export const CARD_START = "CARD_START";
export const CARD_SUCCESS = "CARD_SUCCESS";
export const CARD_FAIL = "CARD_FAIL";

export const LOAD_AMOUNT_START = "LOAD_AMOUNT_START";
export const LOAD_AMOUNT_SUCCESS = "LOAD_AMOUNT_SUCCESS";
export const LOAD_AMOUNT_FAIL = "LOAD_AMOUNT_FAIL";

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

export const loadAmountStart = (payload) => {
	return {
		type: LOAD_AMOUNT_START,
		payload,
	};
};
export const loadAmountSuccess = (payload) => ({
	type: LOAD_AMOUNT_SUCCESS,
	payload,
});

export const loadAmountFail = (payload) => ({
	type: LOAD_AMOUNT_FAIL,
	payload,
});
