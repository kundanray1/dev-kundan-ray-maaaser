import { call, put, select, takeLatest } from "redux-saga/effects";
import { LINK_NEW_CARD_START, UPDATE_LINK_NEW_CARD_START } from "./actions";
import {
	linkNewCardSuccess,
	linkNewCardFail,
	updateLinkNewCardSuccess,
	updateLinkNewCardFail,
} from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

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
			console.log("else");
			yield put(linkNewCardFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		console.log("linkNewCard failed===", payload);
		yield put(linkNewCardFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
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
		console.log("4", res);
		if (res.success) {
			console.log("if");
			yield put(updateLinkNewCardSuccess(res));
			showMessage({
				message: "Card updated successfully",
				type: "success",
			});
		} else {
			console.log("else");

			yield put(updateLinkNewCardFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		console.log("updatelinkNewCard failed===", payload);
		yield put(updateLinkNewCardFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* linkNewCardSaga() {
	yield takeLatest(LINK_NEW_CARD_START, linkNewCard);
	yield takeLatest(UPDATE_LINK_NEW_CARD_START, updateLinkNewCard);
}
