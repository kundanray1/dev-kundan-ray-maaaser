export const ACH_START = "ACH_START";
export const ACH_SUCCESS = "ACH_SUCCESS";
export const ACH_FAIL = "ACH_FAIL";

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
