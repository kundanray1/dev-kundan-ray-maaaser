import {
  MANUAL_DONATE_CONFIRMATION_FAIL,
  MANUAL_DONATE_CONFIRMATION_START,
  MANUAL_DONATE_CONFIRMATION_SUCCESS,
  MANUAL_DONATE_CONFIRMATION_CLEAR
} from './actions';

const initialState = {
  isLoading: false,
  manualDonateConfirmation:null,
  error: null,
};

export const manualDonateConfirmationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case MANUAL_DONATE_CONFIRMATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case MANUAL_DONATE_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        manualDonateConfirmation: payload,
      };
    case MANUAL_DONATE_CONFIRMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

case MANUAL_DONATE_CONFIRMATION_CLEAR:
      return initialState;

    default:
      return state;
  }
};
