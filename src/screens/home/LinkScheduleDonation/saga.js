import { call, put, select, takeLatest } from "redux-saga/effects";
import { LINK_SCHEDULE_DONATION_START,UPDATE_LINK_SCHEDULE_DONATION_START,DONATION_RECEIVERS_START } from "./actions";
import { linkScheduleDonationSuccess, linkScheduleDonationFail,updateLinkScheduleDonationSuccess,
updateLinkScheduleDonationFail,donationReceiversSuccess,donationReceiversFail } from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import accountBase from "./../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* linkScheduleDonation({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(
			requestProto,
			APIEndpoints.SCHEDULE_TRANSACTION,
			{
				method: "POST",
				headers: API.authProtoHeader(),
				body: serializedData,
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(linkScheduleDonationSuccess(res));
			showMessage({
				message: "Fund Donated from linkScheduleDonation successfully!",
				type: "success",
			});
		} else {
			yield put(linkScheduleDonationFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(linkScheduleDonationFail(e));
		showMessage({
			message: "linkScheduleDonation, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* updateLinkScheduleDonation({ payload }) {
	console.log(payload)
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(
			requestProto,
			APIEndpoints.SCHEDULE_TRANSACTION,
			{
				method: "PATCH",
				headers: API.authProtoHeader(),
				body: serializedData,
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("updatelinkScheduleDonation res",res)
		if (res.success) {
			yield put(updateLinkScheduleDonationSuccess(res));
			showMessage({
				message: "updateLinkScheduleDonation Donated from linkScheduleDonation successfully!",
				type: "success",
			});
		} else {
			yield put(updateLinkScheduleDonationFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(updateLinkScheduleDonationFail(e));
		showMessage({
			message: "linkScheduleDonation, error from server or check your credentials!",
			type: "danger",
		});
	}
}


export function* donationReceivers({ payload }) {
	try {
		const response = yield call(requestProto, APIEndpoints.RECEIVERSCLIENT, {
			method: "GET",
			headers: API.authProtoHeader(),
		});

		const res = accountBase.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(donationReceiversSuccess(res));
		} else {
			yield put(donationReceiversFail(res));
			showMessage({
				message: "linkScheduleDonation, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(donationReceiversFail(e));
		showMessage({
			message: "linkScheduleDonation, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* linkScheduleDonationSaga() {
	yield takeLatest(LINK_SCHEDULE_DONATION_START, linkScheduleDonation);
	yield takeLatest(DONATION_RECEIVERS_START, donationReceivers);
	yield takeLatest(UPDATE_LINK_SCHEDULE_DONATION_START, updateLinkScheduleDonation);
}
