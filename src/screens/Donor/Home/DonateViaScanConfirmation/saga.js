import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	DONATE_VIA_SCAN_CONFIRMATION_START,
} from "./actions";
import {
	donateViaScanConfirmationSuccess,
	donateViaScanConfirmationFail
} from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* donateViaScan({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.TRANSACTION, {
			method: "POST",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(donateViaScanConfirmationSuccess(res));
		} else {
			yield put(donateViaScanConfirmationFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(donateViaScanConfirmationFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* donateViaScanConfirmationSaga() {
	yield takeLatest(DONATE_VIA_SCAN_CONFIRMATION_START, donateViaScan);
}
