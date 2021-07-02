export const LINK_NEW_ACCOUNT_START = "LINK_NEW_ACCOUNT_START";
export const LINK_NEW_ACCOUNT_SUCCESS = "LINK_NEW_ACCOUNT_SUCCESS";
export const LINK_NEW_ACCOUNT_FAIL = "LINK_NEW_ACCOUNT_FAIL";
export const LINK_NEW_ACCOUNT_CLEAR = "LINK_NEW_ACCOUNT_CLEAR";
export const UPDATE_LINK_NEW_ACCOUNT_START = "UPDATE_LINK_NEW_ACCOUNT_START";
export const UPDATE_LINK_NEW_ACCOUNT_SUCCESS = "UPDATE_LINK_NEW_ACCOUNT_SUCCESS";
export const UPDATE_LINK_NEW_ACCOUNT_FAIL = "UPDATE_LINK_NEW_ACCOUNT_FAIL";
export const UPDATE_LINK_NEW_ACCOUNT_ClEAR = "UPDATE_LINK_NEW_ACCOUNT_CLEAR";


export const linkNewAccountStart = (payload) => {
  return {
    type: LINK_NEW_ACCOUNT_START,
    payload,
  };
};

export const linkNewAccountSuccess = (payload) => ({
  type: LINK_NEW_ACCOUNT_SUCCESS,
  payload,
});

export const linkNewAccountFail = (payload) => ({
  type: LINK_NEW_ACCOUNT_FAIL,
  payload,
});

export const linkNewAccountClear = (payload) => ({
  type: LINK_NEW_ACCOUNT_CLEAR,
  payload,
});
export const updateLinkNewAccountStart = (payload) => {
  return {
    type: UPDATE_LINK_NEW_ACCOUNT_START,
    payload,
  };
};

export const updateLinkNewAccountSuccess = (payload) => ({
  type: UPDATE_LINK_NEW_ACCOUNT_SUCCESS,
  payload,
});

export const updateLinkNewAccountFail = (payload) => ({
  type: UPDATE_LINK_NEW_ACCOUNT_FAIL,
  payload,
});


export const updateLinkNewAccountClear = (payload) => ({
  type: UPDATE_LINK_NEW_ACCOUNT_CLEAR,
  payload,
});
