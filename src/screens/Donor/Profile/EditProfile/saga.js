import { call, put, select, takeLatest } from "redux-saga/effects";
import { EDIT_PROFILE_START,EDIT_EMPLOYEE_PROFILE_START } from "./actions";
import { editProfileSuccess, editProfileFail,editEmployeeProfileSuccess,
editEmployeeProfileFail } from "./actions";
import { profileSuccess } from "./../actions";

import base from "./../../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* editProfile({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.SIGNUP, {
			method: "PATCH",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(editProfileSuccess(res));
			yield put(profileSuccess(res.client));
			showMessage({
				message: "Profile updated successfully",
				type: "success",
			});
		} else {
			yield put(editProfileFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(editProfileFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* editEmployeeProfile({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.EMPLOYEE, {
			method: "PATCH",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(editEmployeeProfileSuccess(res));
			if(res.employee!==undefined){
			yield put(profileSuccess(res.employee));
			}else{
			yield put(profileSuccess(res.client));
			}
			showMessage({
				message: "Profile updated successfully",
				type: "success",
			});
		} else {
			yield put(editEmployeeProfileFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(editEmployeeProfileFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}


export default function* editProfileSaga() {
	yield takeLatest(EDIT_PROFILE_START, editProfile);
	yield takeLatest(EDIT_EMPLOYEE_PROFILE_START, editEmployeeProfile);
}
