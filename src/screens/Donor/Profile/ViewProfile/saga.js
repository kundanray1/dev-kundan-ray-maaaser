import { call, put, select, takeLatest } from "redux-saga/effects";
import { VIEW_PROFILE_START } from "./actions";
import { viewProfileSuccess, viewProfileFail } from "./actions";
import base from "./../../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* viewProfile({ payload }) {
	try {
		const response = yield call(requestProto, `${APIEndpoints.PROFILE}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(viewProfileSuccess(res.loginaccount.client));
		} else {
			yield put(viewProfileFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(viewProfileFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* viewProfileSaga() {
	yield takeLatest(VIEW_PROFILE_START, viewProfile);
}
