import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOAD_FUND_START } from "./actions";
import { loadFundSuccess, loadFundFail } from "./actions";
import base from "./../../../protos/auth_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../constants/APIHeader";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* loadFund({ payload }) {
	console.log("payload==", payload);
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.LOGIN, {
			method: "GET",
			headers: ProtoHeaders,
			body: serializedData,
		});
		const res = base.AuthBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.error) {
			yield put(loadFundSuccess(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		} else {
			yield put(loadFundFail(res.msg));
			showMessage({
				message: "Password changed successfully",
				type: "success",
			});
		}
	} catch (e) {
		yield put(loadFundFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* loadFundSaga() {
	yield takeLatest(LOAD_FUND_START, loadFund);
}
