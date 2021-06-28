import { call, put, takeLatest } from "redux-saga/effects";
import { SIGNUP_START } from "./actions";
import { signUpFail, signUpSuccess } from "./actions";
import APIEndpoints from "./../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../constants/APIHeader";
import { requestProto } from "../../../utility/request";
import base from "./../../../protos/account_rpc_pb";
import { showMessage } from "react-native-flash-message";
import LoginProto from "./../../../protos/auth_pb";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* signUp({ payload }) {
  try {
    const serializedData = payload.serializeBinary();
    const response = yield call(requestProto, APIEndpoints.SIGNUP, {
      method: "POST",
      headers: ProtoHeaders,
      body: serializedData,
    });
    const res = base.AccountBaseResponse.deserializeBinary(response).toObject();
    if (res.error) {
      yield put(signUpFail(res.msg));
      showMessage({
        message: res.msg,
        type: "danger",
      });
    } else {
      yield put(signUpSuccess(res));
    }
  } catch (e) {
    yield put(signUpFail(e));
    showMessage({
      message: "Error from server or check your credentials!",
      type: "danger",
    });
  }
}
// Individual exports for testing
export default function* signUpSaga() {
  yield takeLatest(SIGNUP_START, signUp);
}
