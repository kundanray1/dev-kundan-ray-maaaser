import {
ADD_BENEFICIARY_FAIL,
ADD_BENEFICIARY_START,
ADD_BENEFICIARY_SUCCESS,
ADD_BENEFICIARY_CLEAR,
UPDATE_BENEFICIARY_START,
UPDATE_BENEFICIARY_SUCCESS,
UPDATE_BENEFICIARY_FAIL,
} from './actions';

const initialState = {
  isLoading: false,
  addBeneficiary: null,
  updateBeneficiary: null,
  error: null,
};

export const addBeneficiaryReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BENEFICIARY_START:
    return {
        ...state,
        isLoading: true,
      };
    case ADD_BENEFICIARY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addBeneficiary: payload,
      };
    case ADD_BENEFICIARY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

      case ADD_BENEFICIARY_CLEAR:
      return initialState;

      case UPDATE_BENEFICIARY_START:
    return {
        ...state,
        isLoading: true,
      };
    case UPDATE_BENEFICIARY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateBeneficiary: payload,
      };
    case UPDATE_BENEFICIARY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
