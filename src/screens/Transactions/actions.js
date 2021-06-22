export const TRANSACTIONS_START = "TRANSACTIONS_START";
export const TRANSACTIONS_SUCCESS = "TRANSACTIONS_SUCCESS";
export const TRANSACTIONS_FAIL = "TRANSACTIONS_FAIL";

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
