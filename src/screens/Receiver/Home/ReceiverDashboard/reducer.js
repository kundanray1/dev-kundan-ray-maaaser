import {
  RECEIVER_DASHBOARD_FAIL,
  RECEIVER_DASHBOARD_START,
  RECEIVER_DASHBOARD_SUCCESS,
  BALANCE_FAIL,
  BALANCE_START,
  BALANCE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  receiverDashboard: null,
  balance:null,
  error: null,
};
export const receiverDashboardReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVER_DASHBOARD_START:
    return {
        ...state,
        isLoading: true,
      };
    case RECEIVER_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        receiverDashboard: payload,
      };
    case RECEIVER_DASHBOARD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
       case BALANCE_START:
    return {
        ...state,
        isLoading: true,
      };
    case BALANCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        balance: payload,
      };
    case BALANCE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
