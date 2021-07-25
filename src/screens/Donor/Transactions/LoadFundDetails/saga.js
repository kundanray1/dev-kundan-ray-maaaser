import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOAD_FUND_DETAILS_START,GENERATE_LOAD_FUND_RECEIPT_START } from "./actions";
import { loadFundDetailsSuccess, loadFundDetailsFail,generateLoadFundReceiptSuccess,
generateLoadFundReceiptFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* loadFundDetails({ payload }) {
	try {
		const response = yield call(requestProto, `${APIEndpoints.TRANSACTION}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(loadFundDetailsSuccess(res));
		} else {
			yield put(loadFundDetailsFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(loadFundDetailsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}


export function* generateLoadFundReceipt({ payload }) {
	try {
		const response = yield call(requestProto, `${APIEndpoints.TRANSACTION_RECEIPT}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(generateLoadFundReceiptSuccess(res));
		} else {
			yield put(generateLoadFundReceiptFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(generateLoadFundReceiptFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}


export default function* loadFundDetailsSaga() {
	yield takeLatest(LOAD_FUND_DETAILS_START, loadFundDetails);
	yield takeLatest(GENERATE_LOAD_FUND_RECEIPT_START, generateLoadFundReceipt);
}
