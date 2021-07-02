import { call, put, select, takeLatest } from "redux-saga/effects";
import { DONATIONS_MADE_START,DONATIONS_MADE_SEARCH_START } from "./actions";
import { donationsMadeSuccess, donationsMadeFail,donationsMadeSearchSuccess,donationsMadeSearchFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* donationsMade({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.DONATIONS_MADE}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			if (res.transactionsList == undefined) {
				yield put(donationsMadeSuccess([]));
			} else {
				yield put(donationsMadeSuccess(res.transactionsList));
			}
		} else {
			yield put(donationsMadeFail(res));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(donationsMadeFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export function* donationsMadeSearch({ payload }) {
	try {
	console.log(donationsMadeSearch)
		const {accountId,search,fromDate,toDate,medium,type}=payload
		const response = yield call(requestProto,`${APIEndpoints.DONATIONS_MADE}/${accountId}?from=${fromDate}&to=${toDate}&medium=${medium}&type=${type}&search=${search}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			if (res.transactionsList == undefined) {
				yield put(donationsMadeSearchSuccess([]));
			} else {
				yield put(donationsMadeSearchSuccess(res.transactionsList));
			}
		} else {
			yield put(donationsMadeSearchFail(res));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(donationsMadeSearchFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* donationsMadeSaga() {
	yield takeLatest(DONATIONS_MADE_START, donationsMade);
	yield takeLatest(DONATIONS_MADE_SEARCH_START, donationsMadeSearch);

}