export const RECEIVER_DASHBOARD_START = "RECEIVER_DASHBOARD_START";
export const RECEIVER_DASHBOARD_SUCCESS = "RECEIVER_DASHBOARD_SUCCESS";
export const RECEIVER_DASHBOARD_FAIL = "RECEIVER_DASHBOARD_FAIL";

export const BALANCE_START = "BALANCE_START";
export const BALANCE_SUCCESS = "BALANCE_SUCCESS";
export const BALANCE_FAIL = "BALANCE_FAIL";
//donorReceiver 
export const receiverDashboardStart = (payload) => {
	return {
		type: RECEIVER_DASHBOARD_START,
		payload,
	};
};
export const receiverDashboardSuccess = (payload) => ({
	type: RECEIVER_DASHBOARD_SUCCESS,
	payload,
});
export const receiverDashboardFail = (payload) => ({
	type: RECEIVER_DASHBOARD_FAIL,
	payload,
});
//balance
export const balanceStart = (payload) => {
	return {
		type: BALANCE_START,
		payload,
	};
};
export const balanceSuccess = (payload) => ({
	type: BALANCE_SUCCESS,
	payload,
});
export const balanceFail = (payload) => ({
	type: BALANCE_FAIL,
	payload,
});
