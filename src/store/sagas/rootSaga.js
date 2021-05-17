import { all } from 'redux-saga/effects';
import authSaga from './../../screens/auth/Login/saga';
import signUpSaga from './../../screens/auth/SignUp/saga';
import postsSaga from './postsSaga';


export default function* rootSaga() {
  yield all([
    authSaga(),
    postsSaga(),
    signUpSaga()
  ])
}