import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	WITHDRAW_FUND_CONFIRMATION_START,
} from "./actions";
import {
	withdrawFundConfirmationSuccess,
	withdrawFundConfirmationFail
} from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data

export function* withdrawFundConfirmation({ payload }) {
	try {
		console.log("1")
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.TRANSACTION, {
			method: "POST",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		console.log("2")
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("3")
		if (res.success) {
			yield put(withdrawFundConfirmationSuccess(res));
		} else {
			yield put(withdrawFundConfirmationFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(withdrawFundConfirmationFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* withdrawFundConfirmationSaga() {
	yield takeLatest(WITHDRAW_FUND_CONFIRMATION_START, withdrawFundConfirmation);
}
