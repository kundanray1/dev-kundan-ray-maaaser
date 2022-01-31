export const RECEIVERS_START = "RECEIVERS_START";
export const RECEIVERS_SUCCESS = "RECEIVERS_SUCCESS";
export const RECEIVERS_FAIL = "RECEIVERS_FAIL";

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
