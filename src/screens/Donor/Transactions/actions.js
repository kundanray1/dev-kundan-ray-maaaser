export const TRANSACTIONS_START = "TRANSACTIONS_START";
export const TRANSACTIONS_SUCCESS = "TRANSACTIONS_SUCCESS";
export const TRANSACTIONS_FAIL = "TRANSACTIONS_FAIL";

export const SEARCH_START = "SEARCH_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

export const transactionsStart = (payload) => {
	return {
		type: TRANSACTIONS_START,
		payload,
	};
};
export const transactionsSuccess = (payload) => ({
	type: TRANSACTIONS_SUCCESS,
	payload,
});
export const transactionsFail = (payload) => ({
	type: TRANSACTIONS_FAIL,
	payload,
});

export const searchStart = (payload) => {
	return {
		type: SEARCH_START,
		payload,
	};
};
export const searchSuccess = (payload) => ({
	type: SEARCH_SUCCESS,
	payload,
});
export const searchFail = (payload) => ({
	type: SEARCH_FAIL,
	payload,
});
