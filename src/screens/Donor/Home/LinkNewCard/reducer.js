import {
  LINK_NEW_CARD_FAIL,
  LINK_NEW_CARD_START,
  LINK_NEW_CARD_SUCCESS,
  LINK_NEW_CARD_CLEAR,
  UPDATE_LINK_NEW_CARD_FAIL,
  UPDATE_LINK_NEW_CARD_START,
  UPDATE_LINK_NEW_CARD_SUCCESS,


} from './actions';

const initialState = {
  isLoading: false,
  linkNewCard: null,
  updateLinkNewCard:null,
  error: null,
};

export const linkNewCardReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case LINK_NEW_CARD_START:
    return {
        ...state,
        isLoading: true,
      };
    case LINK_NEW_CARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        linkNewCard: payload,
      };
    case LINK_NEW_CARD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case LINK_NEW_CARD_CLEAR:
      return initialState;

    case UPDATE_LINK_NEW_CARD_START:
    return {
        ...state,
        isLoading: true,
      };
    case UPDATE_LINK_NEW_CARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateLinkNewCard: payload,
      };
    case UPDATE_LINK_NEW_CARD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    
    default:
      return state;
  }
};
