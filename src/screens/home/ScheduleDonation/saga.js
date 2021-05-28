import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOGIN_START } from "./actions";
import { loginSuccess, loginFail } from "./actions";
import LoginProto from "./../../../protos/auth_pb";
import base from "./../../../protos/auth_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../constants/APIHeader";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import LocalDB from "./../../../api/LocalStorage";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* login({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.LOGIN, {
			method: "POST",
			headers: ProtoHeaders,
			body: serializedData,
		});
		const res = base.AuthBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.error) {
			yield put(loginFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		} else {
			yield put(loginSuccess(res.loginresponse.loginaccount.client));
			showMessage({
				message: "Lgged In successfully",
				type: "success",
			});
			LocalDB.setSessions(res, (resolve, reject) => {
				if (resolve) {
					return resolve;
				} else {
					return reject;
				}
			});
			API.setToken();
		}
	} catch (e) {
		yield put(loginFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* loginSaga() {
	yield takeLatest(LOGIN_START, login);
}
