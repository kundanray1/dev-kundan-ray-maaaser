import {
  TRANSACTIONS_FAIL,
  TRANSACTIONS_START,
  TRANSACTIONS_SUCCESS,
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  GENERATE_TRANSACTIONS_PDF_RECEIPT_START,
  GENERATE_TRANSACTIONS_PDF_RECEIPT_SUCCESS,
  GENERATE_TRANSACTIONS_PDF_RECEIPT_FAIL,
  GENERATE_TRANSACTIONS_PDF_RECEIPT_CLEAR,
  GENERATE_TRANSACTIONS_EXCEL_RECEIPT_START,
  GENERATE_TRANSACTIONS_EXCEL_RECEIPT_SUCCESS,
  GENERATE_TRANSACTIONS_EXCEL_RECEIPT_FAIL,
  GENERATE_TRANSACTIONS_EXCEL_RECEIPT_CLEAR,
} from "./actions";

const initialState = {
  isLoading: true,
  transactions: null,
  generateTransactionsPDFReceipt: null,
  generateTransactionsPDFReceiptLoading:null,
  generateTransactionsExcelReceipt: null,
  generateTransactionsExcelReceiptLoading:null,
  search: null,
  error: null,
};

export const transactionsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case TRANSACTIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactions: payload,
      };
    case TRANSACTIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case SEARCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        search: payload,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case GENERATE_TRANSACTIONS_PDF_RECEIPT_START:
      return {
        ...state,
        generateTransactionsPDFReceiptLoading: true,
      };
    case GENERATE_TRANSACTIONS_PDF_RECEIPT_SUCCESS:
      return {
        ...state,
        generateTransactionsPDFReceiptLoading: false,
        generateTransactionsPDFReceipt: payload,
      };
    case GENERATE_TRANSACTIONS_PDF_RECEIPT_FAIL:
      return {
        ...state,
        generateTransactionsPDFReceiptLoading: false,
        error: payload,
      };

    case GENERATE_TRANSACTIONS_EXCEL_RECEIPT_START:
      return {
        ...state,
        generateTransactionsExcelReceiptLoading: true,
      };
    case GENERATE_TRANSACTIONS_EXCEL_RECEIPT_SUCCESS:
      return {
        ...state,
        generateTransactionsExcelReceiptLoading: false,
        generateTransactionsExcelReceipt: payload,
      };
    case GENERATE_TRANSACTIONS_EXCEL_RECEIPT_FAIL:
      return {
        ...state,
        generateTransactionsExcelReceiptLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
