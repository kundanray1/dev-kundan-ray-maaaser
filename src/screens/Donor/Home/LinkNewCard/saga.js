import { call, put, select, takeLatest } from "redux-saga/effects";
import { LINK_NEW_CARD_START, UPDATE_LINK_NEW_CARD_START } from "./actions";
import {
	linkNewCardSuccess,
	linkNewCardFail,
	updateLinkNewCardSuccess,
	updateLinkNewCardFail,
} from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* linkNewCard({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.CARD, {
			method: "POST",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(linkNewCardSuccess(res));
			showMessage({
				message: "Card added successfully",
				type: "success",
			});
		} else {
			yield put(linkNewCardFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(linkNewCardFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export function* updateLinkNewCard({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.CARD, {
			method: "PATCH",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("updateLinkNewCard res",res);
		if (res.success) {
			yield put(updateLinkNewCardSuccess(res));
			showMessage({
				message: "Card updated successfully",
				type: "success",
			});
		} else {
			yield put(updateLinkNewCardFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(updateLinkNewCardFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* linkNewCardSaga() {
	yield takeLatest(LINK_NEW_CARD_START, linkNewCard);
	yield takeLatest(UPDATE_LINK_NEW_CARD_START, updateLinkNewCard);
}
