export const LETS_GET_STARTED_DONOR_START = "LETS_GET_STARTED_DONOR_START";
export const LETS_GET_STARTED_DONOR_SUCCESS = "LETS_GET_STARTED_DONOR_SUCCESS";
export const LETS_GET_STARTED_DONOR_FAIL = "LETS_GET_STARTED_DONOR_FAIL";

export const letsgetStartedDonorStart = (payload) => {
  return {
    type: LETS_GET_STARTED_DONOR_START,
    payload,
  };
};

export const letsGetStartedDonorSuccess = (payload) => ({
  type: LETS_GET_STARTED_DONOR_SUCCESS,
  payload,
});

export const letsGetStartedDonorFail = (payload) => ({
  type: LETS_GET_STARTED_DONOR_FAIL,
  payload,
});

