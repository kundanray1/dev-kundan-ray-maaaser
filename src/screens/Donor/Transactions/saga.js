import { call, put, select, takeLatest } from "redux-saga/effects";
import { TRANSACTIONS_START,SEARCH_START,GENERATE_TRANSACTIONS_PDF_RECEIPT_START,
GENERATE_TRANSACTIONS_EXCEL_RECEIPT_START } from "./actions";
import { transactionsSuccess,transactionsFail,searchSuccess, searchFail,generateTransactionsPDFReceiptSuccess,
generateTransactionsPDFReceiptFail,
generateTransactionsExcelReceiptSuccess,
generateTransactionsExcelReceiptFail, } from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* transactions({ payload }) {
	try {
		const response = yield call(requestProto,`${APIEndpoints.DONATIONS_MADE}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(transactionsSuccess(res.transactionsList));
		} else {
			yield put(transactionsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(transactionsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* search({ payload }) {
	try {
		const {accountId,fromDate,toDate,medium,type,search}=payload
		const response = yield call(requestProto,`${APIEndpoints.DONATIONS_MADE}/${accountId}?from=${fromDate}&to=${toDate}&medium=${medium}&type=${type}&searchTerm=${search}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(transactionsSuccess(res.transactionsList));
		} else {
			yield put(transactionsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "success",
			});
		}
	} catch (e) {
		yield put(transactionsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* generateTransactionsPDFReceipt({ payload }) {
	try {
		const {fromDate,toDate,medium,type,search}=payload
		const response = yield call(requestProto,`${APIEndpoints.TRANSACTIONS_PDF_RECEIPT}&from=${fromDate}&to=${toDate}&medium=${medium}&type=${type}&searchTerm=${search}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(generateTransactionsPDFReceiptSuccess(res));
		} else {
			yield put(generateTransactionsPDFReceiptFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(generateTransactionsPDFReceiptFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}


export function* generateTransactionsExcelReceipt({ payload }) {
	try {
		const {fromDate,toDate,medium,type,search}=payload
		const response = yield call(requestProto,`${APIEndpoints.TRANSACTIONS_EXCEL_RECEIPT}&from=${fromDate}&to=${toDate}&medium=${medium}&type=${type}&searchTerm=${search}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		console.log("generateTransactionsPDFReceipt");
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(generateTransactionsExcelReceiptSuccess(res));
		} else {
			yield put(generateTransactionsExcelReceiptFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(generateTransactionsExcelReceiptFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}


export default function* transactionsSaga() {
	yield takeLatest(TRANSACTIONS_START, transactions);
	yield takeLatest(SEARCH_START, search);
	yield takeLatest(GENERATE_TRANSACTIONS_PDF_RECEIPT_START, generateTransactionsPDFReceipt);
	yield takeLatest(GENERATE_TRANSACTIONS_EXCEL_RECEIPT_START, generateTransactionsExcelReceipt);
}
