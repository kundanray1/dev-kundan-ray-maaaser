import { call, put, select, takeLatest } from "redux-saga/effects";
import { TRANSACTIONS_START,SEARCH_START } from "./actions";
import { transactionsSuccess,transactionsFail,searchSuccess, searchFail, } from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* transactions({ payload }) {
	try {
		const response = yield call(requestProto,`${APIEndpoints.DONATIONS_MADE}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(transactionsSuccess(res.transactionsList));
		} else {
			yield put(transactionsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(transactionsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* search({ payload }) {
	try {
		const {accountId,fromDate,toDate,medium,type}=payload
		const response = yield call(requestProto,`${APIEndpoints.DONATIONS_MADE}/${accountId}?from=${fromDate}&to=${toDate}&medium=${medium}&type=${type}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(transactionsSuccess(res.transactionsList));
		} else {
			yield put(transactionsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "success",
			});
		}
	} catch (e) {
		yield put(transactionsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* transactionsSaga() {
	yield takeLatest(TRANSACTIONS_START, transactions);
	yield takeLatest(SEARCH_START, search);

}
