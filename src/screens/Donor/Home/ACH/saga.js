import { call, put, select, takeLatest } from "redux-saga/effects";
import { ACH_START } from "./actions";
import { ACHSuccess, ACHFail} from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* ach({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.BANK}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(ACHSuccess(res));
		} else {
			yield put(ACHFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(ACHFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* ACHSaga() {
	yield takeLatest(ACH_START, ach);
}



