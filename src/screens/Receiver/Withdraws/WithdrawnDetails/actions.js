export const WITHDRAWN_DETAILS_START = "WITHDRAWN_DETAILS_START";
export const WITHDRAWN_DETAILS_SUCCESS = "WITHDRAWN_DETAILS_SUCCESS";
export const WITHDRAWN_DETAILS_FAIL = "WITHDRAWN_DETAILS_FAIL";
export const WITHDRAWN_DETAILS_CLEAR = "WITHDRAWN_DETAILS_CLEAR";

export const GENERATE_WITHDRAWN_EXCEL_RECEIPT_START = "GENERATE_WITHDRAWN_EXCEL_RECEIPT_START";
export const GENERATE_WITHDRAWN_EXCEL_RECEIPT_SUCCESS = "GENERATE_WITHDRAWN_EXCEL_RECEIPT_SUCCESS";
export const GENERATE_WITHDRAWN_EXCEL_RECEIPT_FAIL = "GENERATE_WITHDRAWN_EXCEL_RECEIPT_FAIL";
export const GENERATE_WITHDRAWN_EXCEL_RECEIPT_CLEAR = "GENERATE_WITHDRAWN_EXCEL_RECEIPT_CLEAR";

export const withdrawnDetailsStart = (payload) => {
	return {
		type: WITHDRAWN_DETAILS_START,
		payload,
	};
};
export const withdrawnDetailsSuccess = (payload) => ({
	type: WITHDRAWN_DETAILS_SUCCESS,
	payload,
});
export const withdrawnDetailsFail = (payload) => ({
	type: WITHDRAWN_DETAILS_FAIL,
	payload,
});
export const withdrawnDetailsClear = (payload) => ({
	type: WITHDRAWN_DETAILS_CLEAR,
	payload,
});

export const generateWithdrawnExcelReceiptStart = (payload) => {
	return {
		type: GENERATE_WITHDRAWN_EXCEL_RECEIPT_START,
		payload,
	};
};
export const generateWithdrawnExcelReceiptSuccess = (payload) => ({
	type: GENERATE_WITHDRAWN_EXCEL_RECEIPT_SUCCESS,
	payload,
});
export const generateWithdrawnExcelReceiptFail = (payload) => ({
	type: GENERATE_WITHDRAWN_EXCEL_RECEIPT_FAIL,
	payload,
});
