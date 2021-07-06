export const ADD_BENEFICIARY_START = "ADD_BENEFICIARY_START";
export const ADD_BENEFICIARY_SUCCESS = "ADD_BENEFICIARY_SUCCESS";
export const ADD_BENEFICIARY_FAIL = "ADD_BENEFICIARY_FAIL";
export const ADD_BENEFICIARY_CLEAR = "ADD_BENEFICIARY_CLEAR";


export const UPDATE_BENEFICIARY_START = "UPDATE_BENEFICIARY_START";
export const UPDATE_BENEFICIARY_SUCCESS = "UPDATE_BENEFICIARY_SUCCESS";
export const UPDATE_BENEFICIARY_FAIL = "UPDATE_BENEFICIARY_FAIL";


export const addBeneficiaryStart = (payload) => {
  return {
    type: ADD_BENEFICIARY_START,
    payload,
  };
};

export const addBeneficiarySuccess = (payload) => ({
  type: ADD_BENEFICIARY_SUCCESS,
  payload,
});

export const addBeneficiaryFail = (payload) => ({
  type: ADD_BENEFICIARY_FAIL,
  payload,
});


export const addBeneficiaryClear = (payload) => ({
  type: ADD_BENEFICIARY_CLEAR,
  payload,
});

export const updateBeneficiaryStart = (payload) => {
  return {
    type: UPDATE_BENEFICIARY_START,
    payload,
  };
};

export const updateBeneficiarySuccess = (payload) => ({
  type: UPDATE_BENEFICIARY_SUCCESS,
  payload,
});

export const updateBeneficiaryFail = (payload) => ({
  type: UPDATE_BENEFICIARY_FAIL,
  payload,
});

