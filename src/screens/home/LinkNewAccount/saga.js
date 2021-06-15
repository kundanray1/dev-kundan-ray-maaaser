import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	LINK_NEW_ACCOUNT_START,
	UPDATE_LINK_NEW_ACCOUNT_START,
} from "./actions";
import {
	linkNewAccountSuccess,
	linkNewAccountFail,
	updateLinkNewAccountSuccess,
	updateLinkNewAccountFail,
} from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* linkNewAccount({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.BANK, {
			method: "POST",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("res=======", res);
		if (res.success) {
			yield put(linkNewAccountSuccess(res));
			showMessage({
				message: "Bank added successfully",
				type: "success",
			});
		} else {
			yield put(linkNewAccountFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		console.log("linkNewAccount failed===", payload);

		yield put(linkNewAccountFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* updateLinkNewAccount({ payload }) {
	try {
		console.log("1");

		const serializedData = payload.serializeBinary();
		console.log("2");

		const response = yield call(requestProto, APIEndpoints.BANK, {
			method: "PATCH",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		console.log("3");

		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("4", res);

		if (res.success) {
			yield put(updateLinkNewAccountSuccess(res));
			showMessage({
				message: "Bank updated successfully",
				type: "success",
			});
		} else {
			yield put(updateLinkNewAccountFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		console.log("linkNewAccount failed===", payload);

		yield put(updateLinkNewAccountFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* linkNewAccountSaga() {
	yield takeLatest(LINK_NEW_ACCOUNT_START, linkNewAccount);
	yield takeLatest(UPDATE_LINK_NEW_ACCOUNT_START, updateLinkNewAccount);
}
