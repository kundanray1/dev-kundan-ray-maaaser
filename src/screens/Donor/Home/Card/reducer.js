import {
  CARD_FAIL,
  CARD_START,
  CARD_SUCCESS,
  CARD_UPDATE_STATUS_START,
  CARD_UPDATE_STATUS_SUCCESS,
  CARD_UPDATE_STATUS_FAIL,
  
} from "./actions";
const initialState = {
  isLoading: true,
  card: null,
  isUpdateLoading: false,
  cardUpdateStatus: null,
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

    case CARD_UPDATE_STATUS_START:
      return {
        ...state,
        isUpdateLoading: true,
      };
    case CARD_UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        isUpdateLoading: false,
        cardUpdateStatus: payload,
      };
    case CARD_UPDATE_STATUS_FAIL:
      return {
        ...state,
        isUpdateLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
