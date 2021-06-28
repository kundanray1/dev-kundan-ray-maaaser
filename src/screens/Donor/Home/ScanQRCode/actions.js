export const SCAN_QR_CODE_START = "SCAN_QR_CODE_START";
export const SCAN_QR_CODE_SUCCESS = "SCAN_QR_CODE_SUCCESS";
export const SCAN_QR_CODE_FAIL = "SCAN_QR_CODE_FAIL";

export const scanQRCodeStart = (payload) => {
	return {
		type: SCAN_QR_CODE_START,
		payload,
	};
};
export const scanQRCodeSuccess = (payload) => ({
	type: SCAN_QR_CODE_SUCCESS,
	payload,
});
export const scanQRCodeFail = (payload) => ({
	type: SCAN_QR_CODE_FAIL,
	payload,
});
