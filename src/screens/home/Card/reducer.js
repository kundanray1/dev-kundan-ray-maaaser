import {
  CARD_FAIL,
  CARD_START,
  CARD_SUCCESS,
  LOAD_AMOUNT_FAIL,
  LOAD_AMOUNT_START,
  LOAD_AMOUNT_SUCCESS,
} from "./actions";
const initialState = {
  isLoading: false,
  card: "",
  loadAmount: "",
  error: null,
};

export const cardReducer = (state = initialState, { type, payload }) => {
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
    case LOAD_AMOUNT_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_AMOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadAmount: payload,
      };
    case LOAD_AMOUNT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
