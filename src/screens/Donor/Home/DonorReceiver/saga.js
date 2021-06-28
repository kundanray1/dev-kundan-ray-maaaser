import { call, put, select, takeLatest } from "redux-saga/effects";
import { DONOR_RECEIVER_START,BALANCE_START } from "./actions";
import { donorReceiverSuccess, donorReceiverFail,balanceSuccess,balanceFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* donorReceiver({ payload }) {
		try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.BALANCE}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(donorReceiverSuccess(res));
		} else {
			yield put(donorReceiverFail(res));
			showMessage({
				message: "donorReceiver, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(donorReceiverFail(e));
		showMessage({
			message: "donorReceiver, error from server or check your credentials!",
			type: "danger",
		});
	}
}
export function* balance({ payload }) {
		try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.BALANCE}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			if(res.balance==undefined){
			yield put(balanceSuccess(0));
		}else{
			yield put(balanceSuccess(res.balance.balanceamount));
		}
		} else {
			yield put(balanceFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(balanceFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* donorReceiverSaga() {
	yield takeLatest(DONOR_RECEIVER_START, donorReceiver);
	yield takeLatest(BALANCE_START, balance);
}

