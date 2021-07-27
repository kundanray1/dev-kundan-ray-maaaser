import {
  WITHDRAWN_DETAILS_START,
  WITHDRAWN_DETAILS_SUCCESS,
  WITHDRAWN_DETAILS_FAIL,
  WITHDRAWN_DETAILS_CLEAR,
  GENERATE_WITHDRAWN_EXCEL_RECEIPT_START,
  GENERATE_WITHDRAWN_EXCEL_RECEIPT_SUCCESS,
  GENERATE_WITHDRAWN_EXCEL_RECEIPT_FAIL,
  GENERATE_WITHDRAWN_EXCEL_RECEIPT_CLEAR,
} from "./actions";

const initialState = {
  isLoading: true,
  withdrawnDetails: null,
  generateWithdrawnExcelReceipt: null,
  generateWithdrawnExcelReceiptLoading:true,
  error: null,
};

export const withdrawnDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case WITHDRAWN_DETAILS_START:
      return {
        ...state,
        isLoading: true,
      };
    case WITHDRAWN_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        withdrawnDetails: payload,
      };
    case WITHDRAWN_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case WITHDRAWN_DETAILS_CLEAR:
      return initialState;

    case GENERATE_WITHDRAWN_EXCEL_RECEIPT_START:
      return {
        ...state,
        generateWithdrawnExcelReceiptLoading: true,
      };
    case GENERATE_WITHDRAWN_EXCEL_RECEIPT_SUCCESS:
      return {
        ...state,
        generateWithdrawnExcelReceiptLoading: false,
        generateWithdrawnExcelReceipt: payload,
      };
    case GENERATE_WITHDRAWN_EXCEL_RECEIPT_FAIL:
      return {
        ...state,
        generateWithdrawnExcelReceiptLoading: false,
        error: payload,
      };
    case GENERATE_WITHDRAWN_EXCEL_RECEIPT_CLEAR:
      return initialState;

    default:
      return state;
  }
};
