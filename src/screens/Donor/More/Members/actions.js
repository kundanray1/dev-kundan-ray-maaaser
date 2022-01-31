export const MEMBERS_START = "MEMBERS_START";
export const MEMBERS_SUCCESS = "MEMBERS_SUCCESS";
export const MEMBERS_FAIL = "MEMBERS_FAIL";

export const PERMISSIONS_LIST_START = "PERMISSIONS_LIST_START";
export const PERMISSIONS_LIST_SUCCESS = "PERMISSIONS_LIST_SUCCESS";
export const PERMISSIONS_LIST_FAIL = "PERMISSIONS_LIST_FAIL";

export const PERMISSIONS_ASSIGN_START = "PERMISSIONS_ASSIGN_START";
export const PERMISSIONS_ASSIGN_SUCCESS = "PERMISSIONS_ASSIGN_SUCCESS";
export const PERMISSIONS_ASSIGN_FAIL = "PERMISSIONS_ASSIGN_FAIL";
export const PERMISSIONS_ASSIGN_CLEAR = "PERMISSIONS_ASSIGN_CLEAR";



export const membersStart = (payload) => {
	return {
		type: MEMBERS_START,
		payload,
	};
};
export const membersSuccess = (payload) => ({
	type: MEMBERS_SUCCESS,
	payload,
});

export const membersFail = (payload) => ({
	type: MEMBERS_FAIL,
	payload,
});


export const permissionsListStart = (payload) => {
	return {
		type: PERMISSIONS_LIST_START,
		payload,
	};
};
export const permissionsListSuccess = (payload) => ({
	type: PERMISSIONS_LIST_SUCCESS,
	payload,
});

export const permissionsListFail = (payload) => ({
	type: PERMISSIONS_LIST_FAIL,
	payload,
});

export const permissionsAssignStart = (payload) => {
	return {
		type: PERMISSIONS_ASSIGN_START,
		payload,
	};
};
export const permissionsAssignSuccess = (payload) => ({
	type: PERMISSIONS_ASSIGN_SUCCESS,
	payload,
});

export const permissionsAssignFail = (payload) => ({
	type: PERMISSIONS_ASSIGN_FAIL,
	payload,
});


export const permissionsAssignClear = (payload) => ({
	type: PERMISSIONS_ASSIGN_CLEAR,
	payload,
});

