import { call, put, select, takeLatest } from "redux-saga/effects";
import { UPCOMING_DONATIONS_START,UPCOMING_DONATIONS_SEARCH_START } from "./actions";
import { upcomingDonationsSuccess, upcomingDonationsFail,upcomingDonationsSearchSuccess,
upcomingDonationsSearchFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data

export function* upcomingDonations({ payload }) {
	try {
		const response = yield call(
			requestProto,
			APIEndpoints.UPCOMING_TRANSACTION,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			if (res.scheduletransactionsList == undefined) {
				yield put(upcomingDonationsSuccess([]));
			} else {
				yield put(upcomingDonationsSuccess(res.scheduletransactionsList)
				);
			}
		} else {
			yield put(upcomingDonationsFail(res.msg));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(upcomingDonationsFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}


export function* upcomingDonationsSearch({ payload }) {
	try {
		const {search,fromDate,toDate,medium,type}=payload
		console.log("1")
		const response = yield call(requestProto,`${APIEndpoints.UPCOMING_TRANSACTION}?&from=${fromDate}&to=${toDate}&searchTerm=${search}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		console.log("2")
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("3")
		if (res.success) {
			yield put(upcomingDonationsSuccess(res.transactionsList));
		} else {
			yield put(upcomingDonationsSearchFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "success",
			});
		}
	} catch (e) {
		yield put(upcomingDonationsSearchFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}


export default function* upcomingDonationsSaga() {
	yield takeLatest(UPCOMING_DONATIONS_START, upcomingDonations);
	yield takeLatest(UPCOMING_DONATIONS_SEARCH_START, upcomingDonationsSearch);

}
