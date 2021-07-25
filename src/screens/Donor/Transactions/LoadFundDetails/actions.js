export const LOAD_FUND_DETAILS_START = "LOAD_FUND_DETAILS_START";
export const LOAD_FUND_DETAILS_SUCCESS = "LOAD_FUND_DETAILS_SUCCESS";
export const LOAD_FUND_DETAILS_FAIL = "LOAD_FUND_DETAILS_FAIL";
export const LOAD_FUND_DETAILS_CLEAR = "LOAD_FUND_DETAILS_CLEAR";

export const GENERATE_LOAD_FUND_RECEIPT_START = "GENERATE_LOAD_FUND_RECEIPT_START";
export const GENERATE_LOAD_FUND_RECEIPT_SUCCESS = "GENERATE_LOAD_FUND_RECEIPT_SUCCESS";
export const GENERATE_LOAD_FUND_RECEIPT_FAIL = "GENERATE_LOAD_FUND_RECEIPT_FAIL";
export const GENERATE_LOAD_FUND_RECEIPT_CLEAR = "GENERATE_LOAD_FUND_RECEIPT_CLEAR";


export const loadFundDetailsStart = (payload) => {
	return {
		type: LOAD_FUND_DETAILS_START,
		payload,
	};
};
export const loadFundDetailsSuccess = (payload) => ({
	type: LOAD_FUND_DETAILS_SUCCESS,
	payload,
});
export const loadFundDetailsFail = (payload) => ({
	type: LOAD_FUND_DETAILS_FAIL,
	payload,
});
export const loadFundDetailsClear = (payload) => ({
	type: LOAD_FUND_DETAILS_CLEAR,
	payload,
});



export const generateLoadFundReceiptStart = (payload) => {
	return {
		type: GENERATE_LOAD_FUND_RECEIPT_START,
		payload,
	};
};
export const generateLoadFundReceiptSuccess = (payload) => ({
	type: GENERATE_LOAD_FUND_RECEIPT_SUCCESS,
	payload,
});
export const generateLoadFundReceiptFail = (payload) => ({
	type: GENERATE_LOAD_FUND_RECEIPT_FAIL,
	payload,
});
export const generateLoadFundReceiptClear = (payload) => ({
	type: GENERATE_LOAD_FUND_RECEIPT_CLEAR,
	payload,
});
