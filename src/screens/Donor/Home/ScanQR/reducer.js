import {
  SCAN_QR_FAIL,
  SCAN_QR_START,
  SCAN_QR_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  scanQR: '',
  error: null,
};

export const scanQRReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case SCAN_QR_START:
    return {
        ...state,
        isLoading: true,
      };
    case SCAN_QR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        scanQR: payload,
      };
    case SCAN_QR_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
