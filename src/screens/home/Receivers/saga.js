import { call, put, select, takeLatest } from "redux-saga/effects";
import { RECEIVERS_START } from "./actions";
import { receiversSuccess, receiversFail } from "./actions";
import base from "./../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* receivers({ payload }) {
	try {
		const response = yield call(requestProto, APIEndpoints.RECEIVERSCLIENT, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			console.log("asdkjassuccess")
			yield put(receiversSuccess(res));
		} else {
			console.log("easndsalse")
			yield put(receiversFail(res));
			showMessage({
				message: "Sorry, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
			console.log("catch")

		yield put(receiversFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* receiversSaga() {
	yield takeLatest(RECEIVERS_START, receivers);
}

