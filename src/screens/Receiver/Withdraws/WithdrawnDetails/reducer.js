import {
  WITHDRAWN_DETAILS_START,
  WITHDRAWN_DETAILS_SUCCESS,
  WITHDRAWN_DETAILS_FAIL,
  WITHDRAWN_DETAILS_CLEAR,

} from './actions';

const initialState = {
  isLoading: true,
  withdrawnDetails: null,
  error: null,
};

export const withdrawnDetailsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case WITHDRAWN_DETAILS_START:
    return {
        ...state,
        isLoading: true,
      };
    case WITHDRAWN_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        withdrawnDetails: payload,
      };
    case WITHDRAWN_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
       case WITHDRAWN_DETAILS_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
