import { call, put, select, takeLatest } from "redux-saga/effects";
import { CARD_START,CARD_UPDATE_STATUS_START } from "./actions";
import { cardSuccess, cardFail,cardUpdateStatusSuccess, cardUpdateStatusFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

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
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(cardFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* cardUpdateStatus({ payload }) {
	try {
		console.log("1")
		const serializedData = payload.serializeBinary();
		console.log("2")
		const response = yield call(requestProto, APIEndpoints.CARD, {
			method: "DELETE",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		console.log("3")
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("cardUpdateStatus",cardUpdateStatus);
		if (res.success) {
			yield put(cardUpdateStatusSuccess(res));
			showMessage({
				message: "Card deleted successfully!",
				type: "success",
			});
		} else {
			yield put(cardUpdateStatusFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(cardUpdateStatusFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}


export default function* cardSaga() {
	yield takeLatest(CARD_START, card);
	yield takeLatest(CARD_UPDATE_STATUS_START, cardUpdateStatus);
}
