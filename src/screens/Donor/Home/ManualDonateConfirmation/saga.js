import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	MANUAL_DONATE_CONFIRMATION_START,
} from "./actions";
import {
	manualDonateConfirmationSuccess,
	manualDonateConfirmationFail
} from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* manualDonateConfirmation({ payload }) {
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
		console.log("res=======", res);
		if (res.success) {
			yield put(manualDonateConfirmationSuccess(res));
		} else {
			yield put(manualDonateConfirmationFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		console.log("ACHLoadFund Confirm failed===", payload);

		yield put(manualDonateConfirmationFail(e));
		showMessage({
			message: "ACHLoadFund Confirm, error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* manualDonateConfirmationSaga() {
	yield takeLatest(MANUAL_DONATE_CONFIRMATION_START, manualDonateConfirmation);
}
