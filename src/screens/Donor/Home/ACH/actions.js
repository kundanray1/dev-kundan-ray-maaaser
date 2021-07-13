export const ACH_START = "ACH_START";
export const ACH_SUCCESS = "ACH_SUCCESS";
export const ACH_FAIL = "ACH_FAIL";
export const ACH_UPDATE_STATUS_START = "ACH_UPDATE_STATUS_START";
export const ACH_UPDATE_STATUS_SUCCESS = "ACH_UPDATE_STATUS_SUCCESS";
export const ACH_UPDATE_STATUS_FAIL = "ACH_UPDATE_STATUS_FAIL";

export const ACHStart = (payload) => {
	return {
		type: ACH_START,
		payload,
	};
};
export const ACHSuccess = (payload) => ({
	type: ACH_SUCCESS,
	payload,
});

export const ACHFail = (payload) => ({
	type: ACH_FAIL,
	payload,
});

export const ACHUpdateStatusStart = (payload) => {
	return {
		type: ACH_UPDATE_STATUS_START,
		payload,
	};
};
export const ACHUpdateStatusSuccess = (payload) => ({
	type: ACH_UPDATE_STATUS_SUCCESS,
	payload,
});

export const ACHUpdateStatusFail = (payload) => ({
	type: ACH_UPDATE_STATUS_FAIL,
	payload,
});
