import {
  CARD_FAIL,
  CARD_START,
  CARD_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  card: '',
  error: null,
};

export const cardReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CARD_START:
    return {
        ...state,
        isLoading: true,
      };
    case CARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        card: payload,
      };
    case CARD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
