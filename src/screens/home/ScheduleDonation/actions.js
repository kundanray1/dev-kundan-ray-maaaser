export const SCHEDULE_DONATION_START = "SCHEDULE_DONATION_START";
export const SCHEDULE_DONATION_SUCCESS = "SCHEDULE_DONATION_SUCCESS";
export const SCHEDULE_DONATION_FAIL = "SCHEDULE_DONATION_FAIL";

export const scheduleDonationStart = (payload) => {
  return {
    type: SCHEDULE_DONATION_START,
    payload,
  };
};

export const scheduleDonationSuccess = (payload) => ({
  type: SCHEDULE_DONATION_SUCCESS,
  payload,
});

export const scheduleDonationFail = (payload) => ({
  type: SCHEDULE_DONATION_FAIL,
  payload,
});

