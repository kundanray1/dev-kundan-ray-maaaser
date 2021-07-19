import {
  RECEIVER_DETAIL_START,
  RECEIVER_DETAIL_SUCCESS,
  RECEIVER_DETAIL_FAIL,
  RECEIVER_DETAIL_CLEAR,

} from './actions';

const initialState = {
  isLoading: false,
  scheduleDonationReceiverDetail: null,
  error: null,
};

export const scheduleDonationReceiverDetailReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVER_DETAIL_START:
    return {
        ...state,
        isLoading: true,
      };
    case RECEIVER_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        scheduleDonationReceiverDetail: payload,
      };
    case RECEIVER_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
       case RECEIVER_DETAIL_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
