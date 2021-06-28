import { call, put, select, takeLatest } from "redux-saga/effects";
import { MANUAL_START,MANUAL_RECEIVERS_START } from "./actions";
import { manualSuccess, manualFail,manualReceiversSuccess,manualReceiversFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import accountBase from "./../../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* manualReceivers({ payload }) {
	try {
		console.log("1");
		const response = yield call(requestProto, APIEndpoints.RECEIVERSCLIENT, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = accountBase.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(manualReceiversSuccess(res));
		} else {
			yield put(manualReceiversFail(res));
			showMessage({
				message: "manualReceiversFail, error from server or check your credentials!",
				type: "success",
			});
		}
	} catch (e) {
		yield put(manualReceiversFail(e));
		showMessage({
			message: "manualReceiversFail, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* manual({ payload }) {
	try {
		console.log("1")
		const serializedData = payload.serializeBinary();
		const response = yield call(
			requestProto,
			APIEndpoints.TRANSACTION,
			{
				method: "POST",
				headers: API.authProtoHeader(),
				body: serializedData,
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("manual res",res)
		if (res.success) {
			yield put(manualSuccess(res));
			showMessage({
				message: "Fund Donated from manual successfully!",
				type: "success",
			});
		} else {
			yield put(manualFail(res));
			showMessage({
				message: "manual, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(manualFail(e));
		showMessage({
			message: "manual, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* manualSaga() {
	yield takeLatest(MANUAL_START, manual);
	yield takeLatest(MANUAL_RECEIVERS_START, manualReceivers);
}
