import { call, put, select, takeLatest } from "redux-saga/effects";
import { WITHDRAWS_START,WITHDRAWS_SEARCH_START } from "./actions";
import { withdrawsSuccess,withdrawsFail,withdrawsSearchSuccess, withdrawsSearchFail, } from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* withdraws({ payload }) {
	try {
		const response = yield call(requestProto,`${APIEndpoints.DONATIONS_MADE}/${payload}?type=3`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(withdrawsSuccess(res.transactionsList));
		} else {
			yield put(withdrawsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(receiversFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* withdrawsSearch({ payload }) {
	try {
		const {accountId,fromDate,toDate,medium,type}=payload
		const response = yield call(requestProto,`${APIEndpoints.DONATIONS_MADE}/${accountId}?from=${fromDate}&to=${toDate}&medium=${medium}&type=3`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(withdrawsSuccess(res.transactionsList));
		} else {
			yield put(withdrawsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "success",
			});
		}
	} catch (e) {
		yield put(withdrawsSearchFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* withdrawsSaga() {
	yield takeLatest(WITHDRAWS_START, withdraws);
	yield takeLatest(WITHDRAWS_SEARCH_START, withdrawsSearch);

}
