import {
  SCAN_QR_DONATE_START,
  SCAN_QR_DONATE_SUCCESS,
  SCAN_QR_DONATE_FAIL,
  SCAN_QR_DONATE_CLEAR,
} from "./actions";

const initialState = {
  isLoading: false,
  scanQRDonate: null,
  error: null,
};

export const scanQRReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SCAN_QR_DONATE_START:
      return {
        ...state,
        isLoading: true,
      };
    case SCAN_QR_DONATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        scanQRDonate: payload,
      };
    case SCAN_QR_DONATE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case SCAN_QR_DONATE_CLEAR:
      return initialState;

    default:
      return state;
  }
};
