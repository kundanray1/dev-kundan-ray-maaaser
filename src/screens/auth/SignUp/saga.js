import { call, put, select, takeLatest } from "redux-saga/effects";
import { SIGNUP_START } from "./actions";
import { signUpFail, signUpSuccess } from "./actions";
import AccountProto from "./../../../protos/account_pb";
import MaaserProto from "./../../../protos/maaser_pb";
import base from "./../../../protos/account_rpc_pb";
import  APIEndpoints  from "./../../../constants/APIConstants";
import  {ProtoHeaders} from "./../../../constants/APIHeader";
import { requestProto } from '../../../utility/request';


export function* signUp({ payload }) {
	const ACCOUNT_TYPE=MaaserProto.AccountType.DONOR_ACCOUNT
	const CLIENT_TYPE=AccountProto.ClientType.INDIVIDUAL_CLIENT
  const clientData = new AccountProto.Client();
	const accountData = new AccountProto.Account();
	accountData.setEmail("joshanpradhan@gmail.com");
	accountData.setPassword("Joshan@123");
	accountData.setCountrycode("NP");
	accountData.setAccounttype(ACCOUNT_TYPE);
	clientData.setClienttype(CLIENT_TYPE);
    clientData.setAccount(accountData);
	const serializedData = clientData.serializeBinary();
	try {
    const response = yield call(requestProto, APIEndpoints.SIGNUP, {
      method: 'POST',
      headers: ProtoHeaders,
      body: serializedData,
    });
  const res = base.AccountBaseResponse.deserializeBinary(response).toObject();
   console.log("server resposnse object",res)
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
