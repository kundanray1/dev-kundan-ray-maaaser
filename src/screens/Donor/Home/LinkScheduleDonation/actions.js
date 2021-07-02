export const LINK_SCHEDULE_DONATION_START = "LINK_SCHEDULE_DONATION_START";
export const LINK_SCHEDULE_DONATION_SUCCESS = "LINK_SCHEDULE_DONATION_SUCCESS";
export const LINK_SCHEDULE_DONATION_FAIL = "LINK_SCHEDULE_DONATION_FAIL";
export const LINK_SCHEDULE_DONATION_CLEAR = "LINK_SCHEDULE_DONATION_CLEAR";

export const UPDATE_LINK_SCHEDULE_DONATION_START = "UPDATE_LINK_SCHEDULE_DONATION_START";
export const UPDATE_LINK_SCHEDULE_DONATION_SUCCESS = "UPDATE_LINK_SCHEDULE_DONATION_SUCCESS";
export const UPDATE_LINK_SCHEDULE_DONATION_FAIL = "UPDATE_LINK_SCHEDULE_DONATION_FAIL";
export const UPDATE_LINK_SCHEDULE_DONATION_CLEAR = "UPDATE_LINK_SCHEDULE_DONATION_CLEAR";


export const DONATION_RECEIVERS_START = "DONATION_RECEIVERS_START";
export const DONATION_RECEIVERS_SUCCESS = "DONATION_RECEIVERS_SUCCESS";
export const DONATION_RECEIVERS_FAIL = "DONATION_RECEIVERS_FAIL";


export const linkScheduleDonationStart = (payload) => {
  return {
    type: LINK_SCHEDULE_DONATION_START,
    payload,
  };
};

export const linkScheduleDonationSuccess = (payload) => ({
  type: LINK_SCHEDULE_DONATION_SUCCESS,
  payload,
});

export const linkScheduleDonationFail = (payload) => ({
  type: LINK_SCHEDULE_DONATION_FAIL,
  payload,
});

export const linkScheduleDonationClear = (payload) => ({
  type: LINK_SCHEDULE_DONATION_CLEAR,
  payload,
});



export const updateLinkScheduleDonationStart = (payload) => {
  return {
    type: UPDATE_LINK_SCHEDULE_DONATION_START,
    payload,
  };
};

export const updateLinkScheduleDonationSuccess = (payload) => ({
  type: UPDATE_LINK_SCHEDULE_DONATION_SUCCESS,
  payload,
});

export const updateLinkScheduleDonationFail = (payload) => ({
  type: UPDATE_LINK_SCHEDULE_DONATION_FAIL,
  payload,
});

export const updateLinkScheduleDonationClear = (payload) => ({
  type: UPDATE_LINK_SCHEDULE_DONATION_CLEAR,
  payload,
});




export const donationReceiversStart = (payload) => {
  return {
    type: DONATION_RECEIVERS_START,
    payload,
  };
};

export const donationReceiversSuccess = (payload) => ({
  type: DONATION_RECEIVERS_SUCCESS,
  payload,
});

export const donationReceiversFail = (payload) => ({
  type: DONATION_RECEIVERS_FAIL,
  payload,
});
