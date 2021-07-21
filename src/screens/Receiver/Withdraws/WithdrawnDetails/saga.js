import { call, put, select, takeLatest } from "redux-saga/effects";
import { WITHDRAWN_DETAILS_START } from "./actions";
import { withdrawnDetailsSuccess, withdrawnDetailsFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";
//serializing the payload into binary and submittin data to requestProto function with additional data
export function* withdrawnDetails({ payload }) {
	try {
		const response = yield call(requestProto, `${APIEndpoints.TRANSACTION}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("withdrawnDetails",res);
		if (res.success) {
			yield put(withdrawnDetailsSuccess(res));
		} else {
			yield put(withdrawnDetailsFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(withdrawnDetailsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* withdrawnDetailsSaga() {
	yield takeLatest(WITHDRAWN_DETAILS_START, withdrawnDetails);
}
