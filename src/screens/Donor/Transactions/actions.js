export const TRANSACTIONS_START = "TRANSACTIONS_START";
export const TRANSACTIONS_SUCCESS = "TRANSACTIONS_SUCCESS";
export const TRANSACTIONS_FAIL = "TRANSACTIONS_FAIL";

export const SEARCH_START = "SEARCH_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

export const GENERATE_TRANSACTIONS_PDF_RECEIPT_START = "GENERATE_TRANSACTIONS_PDF_RECEIPT_START";
export const GENERATE_TRANSACTIONS_PDF_RECEIPT_SUCCESS = "GENERATE_TRANSACTIONS_PDF_RECEIPT_SUCCESS";
export const GENERATE_TRANSACTIONS_PDF_RECEIPT_FAIL = "GENERATE_TRANSACTIONS_PDF_RECEIPT_FAIL";
export const GENERATE_TRANSACTIONS_PDF_RECEIPT_CLEAR = "GENERATE_TRANSACTIONS_PDF_RECEIPT_CLEAR";

export const GENERATE_TRANSACTIONS_EXCEL_RECEIPT_START = "GENERATE_TRANSACTIONS_EXCEL_RECEIPT_START";
export const GENERATE_TRANSACTIONS_EXCEL_RECEIPT_SUCCESS = "GENERATE_TRANSACTIONS_EXCEL_RECEIPT_SUCCESS";
export const GENERATE_TRANSACTIONS_EXCEL_RECEIPT_FAIL = "GENERATE_TRANSACTIONS_EXCEL_RECEIPT_FAIL";
export const GENERATE_TRANSACTIONS_EXCEL_RECEIPT_CLEAR = "GENERATE_TRANSACTIONS_EXCEL_RECEIPT_CLEAR";



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


export const generateTransactionsPDFReceiptStart = (payload) => {
	return {
		type: GENERATE_TRANSACTIONS_PDF_RECEIPT_START,
		payload,
	};
};
export const generateTransactionsPDFReceiptSuccess = (payload) => ({
	type: GENERATE_TRANSACTIONS_PDF_RECEIPT_SUCCESS,
	payload,
});
export const generateTransactionsPDFReceiptFail = (payload) => ({
	type: GENERATE_TRANSACTIONS_PDF_RECEIPT_FAIL,
	payload,
});
export const generateTransactionsPDFReceiptClear = (payload) => ({
	type: GENERATE_TRANSACTIONS_PDF_RECEIPT_CLEAR,
	payload,
});


export const generateTransactionsExcelReceiptStart = (payload) => {
	return {
		type: GENERATE_TRANSACTIONS_EXCEL_RECEIPT_START,
		payload,
	};
};
export const generateTransactionsExcelReceiptSuccess = (payload) => ({
	type: GENERATE_TRANSACTIONS_EXCEL_RECEIPT_SUCCESS,
	payload,
});
export const generateTransactionsExcelReceiptFail = (payload) => ({
	type: GENERATE_TRANSACTIONS_EXCEL_RECEIPT_FAIL,
	payload,
});
export const generateTransactionsExcelReceiptClear = (payload) => ({
	type: GENERATE_TRANSACTIONS_EXCEL_RECEIPT_CLEAR,
	payload,
});
