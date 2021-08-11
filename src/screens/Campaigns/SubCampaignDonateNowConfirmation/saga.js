import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_START,
} from "./actions";
import {
	subCampaignDonateNowConfirmationSuccess,
	subCampaignDonateNowConfirmationFail
} from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* subCampaignDonateNowConfirmation({ payload }) {
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
		if (res.success) {
			yield put(subCampaignDonateNowConfirmationSuccess(res));
		} else {
			yield put(subCampaignDonateNowConfirmationFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(subCampaignDonateNowConfirmationFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* subCampaignDonateNowConfirmationSaga() {
	yield takeLatest(SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_START, subCampaignDonateNowConfirmation);
}
