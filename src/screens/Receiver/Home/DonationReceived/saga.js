import { call, put, select, takeLatest } from "redux-saga/effects";
import { DONATION_RECEIVED_START,DONATION_RECEIVED_SEARCH_START } from "./actions";
import { donationReceivedSuccess, donationReceivedFail,donationReceivedSearchSuccess, donationReceivedSearchFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* donationReceived({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.DONATION_RECEIVED}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		console.log(payload)

console.log(response,'donation receive unserialized')
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log(res,'donation recieve serialized')
		if (res.success) {
			if (res.transactionsList == undefined) {
				yield put(donationReceivedSuccess([]));
				yield put(donationReceivedSearchSuccess([]));
			} else {
				yield put(donationReceivedSuccess(res.transactionsList));
				yield put(donationReceivedSearchSuccess(res.transactionsList));
			}
		} else {
			yield put(donationReceivedFail(res));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(donationReceivedFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* donationReceivedSearch({ payload }) {
	try {
		const {accountid,search,fromDate,toDate}=payload
		const response = yield call(requestProto,`${APIEndpoints.DONATION_RECEIVED}/${accountid}?searchTerm=${search}&from=${fromDate}&to=${toDate}&medium=3&type=2`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			if (res.transactionsList == undefined) {
				yield put(donationReceivedSearchSuccess([]));
			} else {
				yield put(donationReceivedSearchSuccess(res.transactionsList));
			}
		} else {
			yield put(donationReceivedSearchFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "success",
			});
		}
	} catch (e) {
		yield put(donationReceivedSearchFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}


export default function* donationReceivedSaga() {
	yield takeLatest(DONATION_RECEIVED_START, donationReceived);
	yield takeLatest(DONATION_RECEIVED_SEARCH_START, donationReceivedSearch);
}
