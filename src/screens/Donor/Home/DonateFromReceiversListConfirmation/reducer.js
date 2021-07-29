import {
  DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_START,
  DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_SUCCESS,
  DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_FAIL,
  DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_CLEAR
} from './actions';

const initialState = {
  isLoading: false,
  donateFromReceiversListConfirmation:null,
  error: null,
};

export const donateFromReceiversListConfirmationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donateFromReceiversListConfirmation: payload,
      };
    case DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_CLEAR:
      return initialState;

    default:
      return state;
  }
};
