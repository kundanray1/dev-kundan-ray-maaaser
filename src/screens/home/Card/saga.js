import { call, put, select, takeLatest } from "redux-saga/effects";
import { CARD_START,LOAD_AMOUNT_START } from "./actions";
import { cardSuccess, cardFail,loadAmountSuccess,loadAmountFail } from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* card({ payload }) {
	try {
		const response = yield call(requestProto, APIEndpoints.CARD, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(cardSuccess(res.cardsList));
		} else {
			yield put(cardFail(res));
			showMessage({
				message: "Sorry, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(cardFail(e));
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

export default function* cardSaga() {
	yield takeLatest(CARD_START, card);
	yield takeLatest(LOAD_AMOUNT_START, loadAmount);
}
