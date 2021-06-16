export const LINK_SCHEDULE_DONATION_START = "LINK_SCHEDULE_DONATION_START";
export const LINK_SCHEDULE_DONATION_SUCCESS = "LINK_SCHEDULE_DONATION_SUCCESS";
export const LINK_SCHEDULE_DONATION_FAIL = "LINK_SCHEDULE_DONATION_FAIL";

export const RECEIVERS_START = "RECEIVERS_START";
export const RECEIVERS_SUCCESS = "RECEIVERS_SUCCESS";
export const RECEIVERS_FAIL = "RECEIVERS_FAIL";


export const scheduleDonationStart = (payload) => {
  return {
    type: LINK_SCHEDULE_DONATION_START,
    payload,
  };
};

export const scheduleDonationSuccess = (payload) => ({
  type: LINK_SCHEDULE_DONATION_SUCCESS,
  payload,
});

export const scheduleDonationFail = (payload) => ({
  type: LINK_SCHEDULE_DONATION_FAIL,
  payload,
});

export const receiversStart = (payload) => {
  return {
    type: RECEIVERS_START,
    payload,
  };
};

export const receiversSuccess = (payload) => ({
  type: RECEIVERS_SUCCESS,
  payload,
});

export const receiversFail = (payload) => ({
  type: RECEIVERS_FAIL,
  payload,
});
