import { call, put, select, takeLatest } from "redux-saga/effects";
import { ACH_START,LOAD_AMOUNT_START } from "./actions";
import { ACHSuccess, ACHFail,loadAmountSuccess,loadAmountFail } from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* ach({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.BANK}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(ACHSuccess(res));
		} else {
			yield put(ACHFail(res));
			showMessage({
				message: "Sorry, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(ACHFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* loadAmount({ payload }) {
	try {
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
		if (res.success) {
			yield put(loadAmountSuccess(res));
			showMessage({
				message: "Loaded fund successfully!",
				type: "success",
			});
		} else {
			yield put(loadAmountFail(res));
			showMessage({
				message: "Sorry, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(loadAmountFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* ACHSaga() {
	yield takeLatest(ACH_START, ach);
	yield takeLatest(LOAD_AMOUNT_START, loadAmount);
}



