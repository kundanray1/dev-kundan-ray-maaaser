export const DONATE_VIA_SCAN_CONFIRMATION_START = "DONATE_VIA_SCAN_CONFIRMATION_START";
export const DONATE_VIA_SCAN_CONFIRMATION_SUCCESS = "DONATE_VIA_SCAN_CONFIRMATION_SUCCESS";
export const DONATE_VIA_SCAN_CONFIRMATION_FAIL = "DONATE_VIA_SCAN_CONFIRMATION_FAIL";
export const DONATE_VIA_SCAN_CONFIRMATION_CLEAR = "DONATE_VIA_SCAN_CONFIRMATION_CLEAR";

export const donateViaScanConfirmationStart = (payload) => {
  return {
    type: DONATE_VIA_SCAN_CONFIRMATION_START,
    payload,
  };
};

export const donateViaScanConfirmationSuccess = (payload) => ({
  type: DONATE_VIA_SCAN_CONFIRMATION_SUCCESS,
  payload,
});

export const donateViaScanConfirmationFail = (payload) => ({
  type: DONATE_VIA_SCAN_CONFIRMATION_FAIL,
  payload,
});

export const donateViaScanConfirmationClear = (payload) => ({
  type: DONATE_VIA_SCAN_CONFIRMATION_CLEAR,
  payload,
});
