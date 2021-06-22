import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	CARD_LOAD_FUND_CONFIRMATION_START,
} from "./actions";
import {
cardLoadFundConfirmationSuccess,
	cardLoadFundConfirmationFail
} from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* cardLoadFundConfirmation({ payload }) {
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
			yield put(cardLoadFundConfirmationSuccess(res));
		} else {
			yield put(cardLoadFundConfirmationFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		console.log("cardLoadFund Confirm failed===", payload);

		yield put(cardLoadFundConfirmationFail(e));
		showMessage({
			message: "cardLoadFund Confirm, error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* cardLoadFundConfirmationSaga() {
	yield takeLatest(CARD_LOAD_FUND_CONFIRMATION_START, cardLoadFundConfirmation);
}
