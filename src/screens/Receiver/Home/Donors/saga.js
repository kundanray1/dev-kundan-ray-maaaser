import { call, put, select, takeLatest } from "redux-saga/effects";
import { DONORS_START } from "./actions";
import { donorsSuccess, donorsFail } from "./actions";
import base from "./../../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* donors({ payload }) {
	try {
		const response = yield call(requestProto, APIEndpoints.DONORSCLIENT, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(donorsSuccess(res));
		} else {
			yield put(donorsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(donorsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* donorsSaga() {
	yield takeLatest(DONORS_START, donors);
}

