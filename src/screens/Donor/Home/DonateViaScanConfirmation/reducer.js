import {
  DONATE_VIA_SCAN_CONFIRMATION_FAIL,
  DONATE_VIA_SCAN_CONFIRMATION_START,
  DONATE_VIA_SCAN_CONFIRMATION_SUCCESS,
  DONATE_VIA_SCAN_CONFIRMATION_CLEAR
} from './actions';

const initialState = {
  isLoading: false,
  donateViaScanConfirmation:null,
  error: null,
};

export const donateViaScanConfirmationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case DONATE_VIA_SCAN_CONFIRMATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONATE_VIA_SCAN_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donateViaScanConfirmation: payload,
      };
    case DONATE_VIA_SCAN_CONFIRMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

case DONATE_VIA_SCAN_CONFIRMATION_CLEAR:
      return initialState;

    default:
      return state;
  }
};
