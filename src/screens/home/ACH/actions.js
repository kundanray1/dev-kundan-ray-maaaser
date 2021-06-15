export const ACH_START = "ACH_START";
export const ACH_SUCCESS = "ACH_SUCCESS";
export const ACH_FAIL = "ACH_FAIL";
export const LOAD_AMOUNT_START = "LOAD_AMOUNT_START";
export const LOAD_AMOUNT_SUCCESS = "LOAD_AMOUNT_SUCCESS";
export const LOAD_AMOUNT_FAIL = "LOAD_AMOUNT_FAIL";

export const ACHStart = (payload) => {
	return {
		type: ACH_START,
		payload,
	};
};
export const ACHSuccess = (payload) => ({
	type: ACH_SUCCESS,
	payload,
});

export const ACHFail = (payload) => ({
	type: ACH_FAIL,
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
