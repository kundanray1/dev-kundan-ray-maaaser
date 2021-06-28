import { call, put, select, takeLatest } from "redux-saga/effects";
import { CHANGE_PASSWORD_START } from "./actions";
import { changePasswordSuccess, changePasswordFail } from "./actions";
import base from "./../../../../protos/auth_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../../constants/APIHeader";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* changePassword({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.LOGIN, {
			method: "GET",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.AuthBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.error) {
			yield put(changePasswordSuccess(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		} else {
			yield put(changePasswordFail(res.msg));
			showMessage({
				message: "Password changed successfully",
				type: "success",
			});
		}
	} catch (e) {
		yield put(changePasswordFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* changePasswordSaga() {
	yield takeLatest(CHANGE_PASSWORD_START, changePassword);
}
