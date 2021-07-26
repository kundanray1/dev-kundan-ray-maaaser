import {
  LOAD_FUND_DETAILS_START,
  LOAD_FUND_DETAILS_SUCCESS,
  LOAD_FUND_DETAILS_FAIL,
  LOAD_FUND_DETAILS_CLEAR,
  GENERATE_LOAD_FUND_RECEIPT_START,
  GENERATE_LOAD_FUND_RECEIPT_SUCCESS,
  GENERATE_LOAD_FUND_RECEIPT_FAIL,
  GENERATE_LOAD_FUND_RECEIPT_CLEAR,
GENERATE_EXCEL_RECEIPT_START,
GENERATE_EXCEL_RECEIPT_SUCCESS,
GENERATE_EXCEL_RECEIPT_FAIL,
GENERATE_EXCEL_RECEIPT_CLEAR
} from "./actions";

const initialState = {
  isLoading: true,
  loadFundDetails: null,
  generateLoadFundReceipt: null,
  generateExcelReceipt:null,
  error: null,
};

export const loadFundDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case LOAD_FUND_DETAILS_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_FUND_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadFundDetails: payload,
      };
    case LOAD_FUND_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case LOAD_FUND_DETAILS_CLEAR:
      return initialState;

    case GENERATE_LOAD_FUND_RECEIPT_START:
      return {
        ...state,
        isLoading: true,
      };
    case GENERATE_LOAD_FUND_RECEIPT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        generateLoadFundReceipt: payload,
      };
    case GENERATE_LOAD_FUND_RECEIPT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GENERATE_LOAD_FUND_RECEIPT_CLEAR:
      return initialState;

    case GENERATE_EXCEL_RECEIPT_START:
      return {
        ...state,
        isLoading: true,
      };
    case GENERATE_EXCEL_RECEIPT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        generateExcelReceipt: payload,
      };
    case GENERATE_EXCEL_RECEIPT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GENERATE_EXCEL_RECEIPT_CLEAR:
      return initialState;
        
    default:
      return initialState;
  }
};
