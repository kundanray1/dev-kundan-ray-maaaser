export const MERCHANT_DASHBOARD_START = "MERCHANT_DASHBOARD_START";
export const MERCHANT_DASHBOARD_SUCCESS = "MERCHANT_DASHBOARD_SUCCESS";
export const MERCHANT_DASHBOARD_FAIL = "MERCHANT_DASHBOARD_FAIL";

export const BALANCE_START = "BALANCE_START";
export const BALANCE_SUCCESS = "BALANCE_SUCCESS";
export const BALANCE_FAIL = "BALANCE_FAIL";
//donorReceiver 
export const merchantDashboardStart = (payload) => {
	return {
		type: MERCHANT_DASHBOARD_START,
		payload,
	};
};
export const merchantDashboardSuccess = (payload) => ({
	type: MERCHANT_DASHBOARD_SUCCESS,
	payload,
});
export const merchantDashboardFail = (payload) => ({
	type: MERCHANT_DASHBOARD_FAIL,
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
