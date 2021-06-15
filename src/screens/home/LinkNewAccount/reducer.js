import {
  LINK_NEW_ACCOUNT_FAIL,
  LINK_NEW_ACCOUNT_START,
  LINK_NEW_ACCOUNT_SUCCESS,
  LINK_NEW_ACCOUNT_CLEAR,
  UPDATE_LINK_NEW_ACCOUNT_FAIL,
  UPDATE_LINK_NEW_ACCOUNT_START,
  UPDATE_LINK_NEW_ACCOUNT_SUCCESS,

} from './actions';

const initialState = {
  isLoading: false,
  linkNewAccount: '',
  error: null,
};

export const linkNewAccountReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case LINK_NEW_ACCOUNT_START:
    return {
        ...state,
        isLoading: true,
      };
    case LINK_NEW_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        linkNewAccount: payload,
      };
    case LINK_NEW_ACCOUNT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case LINK_NEW_ACCOUNT_CLEAR:
      return initialState;
   

    case UPDATE_LINK_NEW_ACCOUNT_START:
    return {
        ...state,
        isLoading: true,
      };
    case UPDATE_LINK_NEW_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        linkNewAccount: payload,
      };
    case UPDATE_LINK_NEW_ACCOUNT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
