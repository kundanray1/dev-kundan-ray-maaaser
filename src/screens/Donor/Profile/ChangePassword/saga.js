import { call, put, select, takeLatest } from "redux-saga/effects";
import { CHANGE_PASSWORD_START } from "./actions";
import { changePasswordSuccess, changePasswordFail } from "./actions";
import base from "./../../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../../constants/APIHeader";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* changePassword({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.CHANGE_PASSWORD, {
			method: "PATCH",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(changePasswordSuccess(res));
			showMessage({
				message: "Password changed successfully",
				type: "success",
			});
			
		} else {
			yield put(changePasswordFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(changePasswordFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* changePasswordSaga() {
	yield takeLatest(CHANGE_PASSWORD_START, changePassword);
}
