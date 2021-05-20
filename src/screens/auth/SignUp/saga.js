import { call, put, select, takeLatest } from "redux-saga/effects";
import { SIGNUP_START } from "./actions";
import { signUpFail, signUpSuccess } from "./actions";
import  APIEndpoints  from "./../../../constants/APIConstants";
import  {ProtoHeaders} from "./../../../constants/APIHeader";
import { requestProto } from '../../../utility/request';
import base from "./../../../protos/account_rpc_pb";
import { showMessage } from "react-native-flash-message";

export function* signUp( {payload} ) {
  console.log(payload)
	try {
    const serializedData = payload.serializeBinary();
    console.log("after SiserializeBinary()==",serializedData)
    const response = yield call(requestProto, APIEndpoints.SIGNUP, {
      method: 'POST',
      headers: ProtoHeaders,
      body: serializedData,
    });
   const res = base.AccountBaseResponse.deserializeBinary(response).toObject();
    if (res.error) {
      yield put(signUpFail(res.msg));
    } else {
      yield put(signUpSuccess(res));
    }
  } catch (e) {
    yield put(signUpFail(e));
  }

}
// Individual exports for testing
export default function* signUpSaga() {
	yield takeLatest(SIGNUP_START, signUp);
}
