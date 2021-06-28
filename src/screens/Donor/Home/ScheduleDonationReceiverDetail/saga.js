import { call, put, select, takeLatest } from "redux-saga/effects";
import { RECEIVER_DETAIL_START } from "./actions";
import { scheduleDonationReceiverDetailSuccess, scheduleDonationReceiverDetailFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* scheduleDonationReceiverDetail({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.UPDATE_SCHEDULE_TRANSACTION_STATUS, {
			method: "PATCH",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(scheduleDonationReceiverDetailSuccess(res));
			showMessage({
				message: "Changed schedule donation status successfully",
				type: "success",
			});
		} else {
			yield put(scheduleDonationReceiverDetailFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(scheduleDonationReceiverDetailFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* scheduleDonationReceiverDetailSaga() {
	yield takeLatest(RECEIVER_DETAIL_START, scheduleDonationReceiverDetail);
}
