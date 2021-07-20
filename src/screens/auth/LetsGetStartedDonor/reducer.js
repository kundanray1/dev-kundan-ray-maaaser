import {
  LETS_GET_STARTED_DONOR_START,
  LETS_GET_STARTED_DONOR_SUCCESS,
  LETS_GET_STARTED_DONOR_FAIL,
  IMAGE_UPLOAD_START,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAIL,
  IMAGE_UPLOAD_CLEAR
} from "./actions";

const initialState = {
  isLoading: false,
  user: null,
  image:null,
  error: null,
};

export const letsGetStartedDonorReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case LETS_GET_STARTED_DONOR_START:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };

    case LETS_GET_STARTED_DONOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: payload,
      };
    case LETS_GET_STARTED_DONOR_FAIL:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: payload,
      };

    case IMAGE_UPLOAD_START:
      return {
        ...state,
        isLoading: true,
      };

    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        image: payload,
      };
    case IMAGE_UPLOAD_FAIL:
      return {
        ...state,
        image: null,
        isLoading: false,
        error: payload,
      };
    case IMAGE_UPLOAD_CLEAR:
      return initialState

    default:
      return state;
  }
};
