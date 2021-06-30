import { call, put, select, takeLatest } from "redux-saga/effects";
import { CARD_START } from "./actions";
import { cardSuccess, cardFail } from "./actions";
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
		console.log("card",res)
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

export default function* cardSaga() {
	yield takeLatest(CARD_START, card);
}
