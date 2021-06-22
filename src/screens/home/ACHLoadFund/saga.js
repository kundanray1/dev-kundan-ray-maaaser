import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	ACH_LOAD_FUND_START,
} from "./actions";
import {
	ACHLoadFundSuccess,
	ACHLoadFundFail
} from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* ACHLoadFund({ payload }) {
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
			yield put(ACHLoadFundSuccess(res));
			
		} else {
			yield put(ACHLoadFundFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		console.log("ACHLoadFund failed===", payload);

		yield put(ACHLoadFundFail(e));
		showMessage({
			message: "ACHLoadFund, error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* ACHLoadFundSaga() {
	yield takeLatest(ACH_LOAD_FUND_START, ACHLoadFund);
}
