import {
  SCAN_QR_CODE_FAIL,
  SCAN_QR_CODE_START,
  SCAN_QR_CODE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  scanQRCode: null,
  error: null,
};

export const scanQRCodeReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case SCAN_QR_CODE_START:
    return {
        ...state,
        isLoading: true,
      };
    case SCAN_QR_CODE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        scanQRCode: payload,
      };
    case SCAN_QR_CODE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
