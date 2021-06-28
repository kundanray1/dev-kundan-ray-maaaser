export const LINKED_ACCOUNTS_START = "LINKED_ACCOUNTS_START";
export const LINKED_ACCOUNTS_SUCCESS = "LINKED_ACCOUNTS_SUCCESS";
export const LINKED_ACCOUNTS_FAIL = "LINKED_ACCOUNTS_FAIL";

export const linkedAccountsStart = (payload) => {
	return {
		type: LINKED_ACCOUNTS_START,
		payload,
	};
};
export const linkedAccountsSuccess = (payload) => ({
	type: LINKED_ACCOUNTS_SUCCESS,
	payload,
});

export const linkedAccountsFail = (payload) => ({
	type: LINKED_ACCOUNTS_FAIL,
	payload,
});
