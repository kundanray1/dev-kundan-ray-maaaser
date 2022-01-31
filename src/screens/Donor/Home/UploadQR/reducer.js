import {
  UPLOAD_QR_FAIL,
  UPLOAD_QR_START,
  UPLOAD_QR_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  uploadQR: '',
  error: null,
};

export const uploadQRReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case UPLOAD_QR_START:
    return {
        ...state,
        isLoading: true,
      };
    case UPLOAD_QR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        uploadQR: payload,
      };
    case UPLOAD_QR_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
