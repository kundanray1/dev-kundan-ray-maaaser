export const LINK_NEW_CARD_START = "LINK_NEW_CARD_START";
export const LINK_NEW_CARD_SUCCESS = "LINK_NEW_CARD_SUCCESS";
export const LINK_NEW_CARD_FAIL = "LINK_NEW_CARD_FAIL";

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

