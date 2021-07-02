export const LINK_NEW_CARD_START = "LINK_NEW_CARD_START";
export const LINK_NEW_CARD_SUCCESS = "LINK_NEW_CARD_SUCCESS";
export const LINK_NEW_CARD_FAIL = "LINK_NEW_CARD_FAIL";
export const LINK_NEW_CARD_CLEAR = "LINK_NEW_CARD_CLEAR";
export const UPDATE_LINK_NEW_CARD_START = "UPDATE_LINK_NEW_CARD_START";
export const UPDATE_LINK_NEW_CARD_SUCCESS = "UPDATE_LINK_NEW_CARD_SUCCESS";
export const UPDATE_LINK_NEW_CARD_FAIL = "UPDATE_LINK_NEW_CARD_FAIL";
export const UPDATE_LINK_NEW_CARD_CLEAR = "UPDATE_LINK_NEW_CARD_CLEAR";


export const linkNewCardStart = (payload) => {
  return {
    type: LINK_NEW_CARD_START,
    payload,
  };
};

export const linkNewCardSuccess = (payload) => ({
  type: LINK_NEW_CARD_SUCCESS,
  payload,
});

export const linkNewCardFail = (payload) => ({
  type: LINK_NEW_CARD_FAIL,
  payload,
});

export const linkNewCardClear = (payload) => ({
  type: LINK_NEW_CARD_CLEAR,
  payload,
});
export const updateLinkNewCardStart = (payload) => {
  return {
    type: UPDATE_LINK_NEW_CARD_START,
    payload,
  };
};

export const updateLinkNewCardSuccess = (payload) => ({
  type: UPDATE_LINK_NEW_CARD_SUCCESS,
  payload,
});

export const updateLinkNewCardFail = (payload) => ({
  type: UPDATE_LINK_NEW_CARD_FAIL,
  payload,
});
export const updateLinkNewCardClear = (payload) => ({
  type: UPDATE_LINK_NEW_CARD_CLEAR,
  payload,
});
