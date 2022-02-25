import {
  MERCHANT_DASHBOARD_FAIL,
  MERCHANT_DASHBOARD_START,
  MERCHANT_DASHBOARD_SUCCESS,
  BALANCE_FAIL,
  BALANCE_START,
  BALANCE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  merchantDashboard: null,
  balance:null,
  error: null,
};
export const merchantDashboardReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case MERCHANT_DASHBOARD_START:
    return {
        ...state,
        isLoading: true,
      };
    case MERCHANT_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        merchantDashboard: payload,
      };
    case MERCHANT_DASHBOARD_FAIL:
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
