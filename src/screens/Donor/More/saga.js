import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOGOUT_START } from "./actions";
import { logoutSuccess, logoutFail } from "./actions";
import base from "./../../../protos/auth_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* logout({ payload }) {
		try {
		const response = yield call(
			requestProto,APIEndpoints.LOGOUT,
			{
				method: "DELETE",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.AuthBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("Logout",res);
		if (res.success) {
			yield API.removeTokens();
			yield put(logoutSuccess(res));
			showMessage({
				message: res.msg,
				type: "success",
			});
		} else {
			yield put(logoutFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(logoutFail(e));
		showMessage({
			message: "logout, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* moreSaga() {
	yield takeLatest(LOGOUT_START, logout);
}

