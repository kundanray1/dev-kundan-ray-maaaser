export const UPLOAD_QR_START = "UPLOAD_QR_START";
export const UPLOAD_QR_SUCCESS = "UPLOAD_QR_SUCCESS";
export const UPLOAD_QR_FAIL = "UPLOAD_QR_FAIL";

export const uploadQRStart = (payload) => {
	return {
		type: UPLOAD_QR_START,
		payload,
	};
};
export const uploadQRSuccess = (payload) => ({
	type: UPLOAD_QR_SUCCESS,
	payload,
});
export const uploadQRFail = (payload) => ({
	type: UPLOAD_QR_FAIL,
	payload,
});
