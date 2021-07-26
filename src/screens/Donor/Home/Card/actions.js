export const CARD_START = "CARD_START";
export const CARD_SUCCESS = "CARD_SUCCESS";
export const CARD_FAIL = "CARD_FAIL";

export const CARD_UPDATE_STATUS_START = "CARD_UPDATE_STATUS_START";
export const CARD_UPDATE_STATUS_SUCCESS = "CARD_UPDATE_STATUS_SUCCESS";
export const CARD_UPDATE_STATUS_FAIL = "CARD_UPDATE_STATUS_FAIL";

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

export const cardUpdateStatusStart = (payload) => {
	return {
		type: CARD_UPDATE_STATUS_START,
		payload,
	};
};
export const cardUpdateStatusSuccess = (payload) => ({
	type: CARD_UPDATE_STATUS_SUCCESS,
	payload,
});
export const cardUpdateStatusFail = (payload) => ({
	type: CARD_UPDATE_STATUS_FAIL,
	payload,
});
