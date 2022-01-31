import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	MEMBERS_START,
	PERMISSIONS_LIST_START,
	PERMISSIONS_ASSIGN_START,
} from "./actions";
import {
	membersSuccess,
	membersFail,
	permissionsListSuccess,
	permissionsListFail,
	permissionsAssignSuccess,
	permissionsAssignFail,
} from "./actions";
import base from "./../../../../protos/account_rpc_pb";
import permissionBase from "./../../../../protos/permission_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* members({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.GET_EMPLOYEE_LIST}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(membersSuccess(res));
		} else {
			yield put(membersFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(membersFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* permissionsList({ payload }) {
	try {
		const response = yield call(
			requestProto,
			APIEndpoints.GET_PERMISSIONS,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = permissionBase.PermissionBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(permissionsListSuccess(res.permissionsList));
		} else {
			yield put(permissionsListFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(permissionsListFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* permissionsAssign({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(
			requestProto,
			APIEndpoints.POST_PERMISSIONS,
			{
				method: "POST",
				headers: API.authProtoHeader(),
				body: serializedData,
			}
		);
		const res = permissionBase.PermissionBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(permissionsAssignSuccess(res));
			showMessage({
				message: "Permissions assigned successfully",
				type: "success",
			});
		} else {
			yield put(permissionsAssignFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(permissionsAssignFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* membersSaga() {
	yield takeLatest(MEMBERS_START, members);
	yield takeLatest(PERMISSIONS_ASSIGN_START, permissionsAssign);
	yield takeLatest(PERMISSIONS_LIST_START, permissionsList);
}
