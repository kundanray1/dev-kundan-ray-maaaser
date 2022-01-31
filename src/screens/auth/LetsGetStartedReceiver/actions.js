export const LETS_GET_STARTED_RECEIVER_START = "LETS_GET_STARTED_RECEIVER_START";
export const LETS_GET_STARTED_RECEIVER_SUCCESS = "LETS_GET_STARTED_RECEIVER_SUCCESS";
export const LETS_GET_STARTED_RECEIVER_FAIL = "LETS_GET_STARTED_RECEIVER_FAIL";

export const letsGetStartedReceiverStart = (payload) => {
  return {
    type: LETS_GET_STARTED_RECEIVER_START,
    payload,
  };
};

export const letsGetStartedReceiverSuccess = (payload) => ({
  type: LETS_GET_STARTED_RECEIVER_SUCCESS,
  payload,
});

export const letsGetStartedReceiverFail = (payload) => ({
  type: LETS_GET_STARTED_RECEIVER_FAIL,
  payload,
});

