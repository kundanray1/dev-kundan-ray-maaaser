import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOGIN_START } from "./actions";
import { loginSuccess, loginFail } from "./actions";
import LoginProto from "./../../../protos/auth_pb";
import base from "./../../../protos/auth_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../constants/APIHeader";
import { requestProto } from "../../../utility/request";

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
		console.log(res);	
		if (res.error) {
			yield put(loginFail(res.msg));
		} else {
			yield put(loginSuccess(res));
		}
	} catch (e) {
		yield put(loginFail(e));
	}
}
// Individual exports for testing
export default function* loginSaga() {
	yield takeLatest(LOGIN_START, login);
}
