import { call, put, select, takeLatest } from "redux-saga/effects";
import { FORGOT_PASSWORD_START } from "./actions";
import { forgotPasswordSuccess, forgotPasswordFail } from "./actions";
import base from "./../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../constants/APIHeader";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import LocalDB from "./../../../api/LocalStorage";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* forgotPassword({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.FORGOT_PASSWORD}${payload}`,
			{
				method: "GET",
				headers: ProtoHeaders,
			}
		);
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(forgotPasswordSuccess(res));
			showMessage({
				message: res.msg,
				type: "success",
			});
		} else {
			yield put(forgotPasswordFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(forgotPasswordFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* forgotPasswordSaga() {
	yield takeLatest(FORGOT_PASSWORD_START, forgotPassword);
}
