export const LETS_GET_STARTED_DONOR_START = "LETS_GET_STARTED_DONOR_START";
export const LETS_GET_STARTED_DONOR_SUCCESS = "LETS_GET_STARTED_DONOR_SUCCESS";
export const LETS_GET_STARTED_DONOR_FAIL = "LETS_GET_STARTED_DONOR_FAIL";

export const IMAGE_UPLOAD_START = "IMAGE_UPLOAD_START";
export const IMAGE_UPLOAD_SUCCESS = "IMAGE_UPLOAD_SUCCESS";
export const IMAGE_UPLOAD_FAIL = "IMAGE_UPLOAD_FAIL";
export const IMAGE_UPLOAD_CLEAR = "IMAGE_UPLOAD_CLEAR";


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


export const imageUploadStart = (payload) => {
  return {
    type: IMAGE_UPLOAD_START,
    payload,
  };
};

export const imageUploadSuccess = (payload) => ({
  type: IMAGE_UPLOAD_SUCCESS,
  payload,
});

export const imageUploadFail = (payload) => ({
  type: IMAGE_UPLOAD_FAIL,
  payload,
});

export const imageUploadClear = (payload) => ({
  type: IMAGE_UPLOAD_CLEAR,
  payload,
});

