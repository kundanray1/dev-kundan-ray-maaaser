import { call, put, select, takeLatest } from "redux-saga/effects";
import { RECEIVER_PROFILE_START } from "./actions";
import { receiverProfileSuccess, receiverProfileFail } from "./actions";
import base from "./../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* receiverProfile({ payload }) {
	try {
		const response = yield call(requestProto, `${APIEndpoints.PROFILE}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(receiverProfileSuccess(res.loginaccount.client));
		} else {
			yield put(receiverProfileFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(receiverProfileFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* receiverProfileSaga() {
	yield takeLatest(RECEIVER_PROFILE_START, receiverProfile);
}
