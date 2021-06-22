import { call, put, select, takeLatest } from "redux-saga/effects";
import { TRANSACTIONS_START } from "./actions";
import { transactionsSuccess, transactionsFail } from "./actions";
import base from "./../../protos/payment_rpc_pb";
import APIEndpoints from "./../../constants/APIConstants";
import { requestProto } from "../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../api/API";

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
		console.log("transactions res",res);
		if (res.success) {
			yield put(transactionsSuccess(res.transactionsList));
		} else {
			yield put(transactionsFail(res));
			showMessage({
				message: "transactions, error from server or check your credentials!",
				type: "success",
			});
		}
	} catch (e) {
		yield put(receiversFail(e));
		showMessage({
			message: "transactions, error from server or check your credentials!",
			type: "danger",
		});
	}
}


export default function* transactionsSaga() {
	yield takeLatest(TRANSACTIONS_START, transactions);
}
