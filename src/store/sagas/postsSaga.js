import { takeEvery, all, call, put, takeLeading } from "redux-saga/effects";
import {
	GET_POSTS,
	getPostsSuccess,
	getPostsFailed,
	ADD_POST,
	addPostFailed,
	addPostSuccess,
} from "./../actions/PostsActions";
import { PostsAPI } from "./../../api/PostsAPI";
const postsApi = new PostsAPI();

function* getPostsSaga() {
	try {
		const data = yield call(postsApi.getPosts);
		console.log("success from getPostsSaga");
		yield put(getPostsSuccess(data));
	} catch (error) {
		console.log("error from getPostsSaga");
		yield put(getPostsFailed(error.message));
	}
}

function* getPostsWatcher() {
	yield takeEvery(GET_POSTS, getPostsSaga);
}

function* addPostSaga(action) {
	try {
		const data = yield call(postsApi.addPost, action.payload);
		yield put(addPostSuccess({ ...action.payload, ...data }));
	} catch (error) {
		yield put(addPostFailed(error.message));
	}
}

function* addPostWatcher() {
	yield takeLeading(ADD_POST, addPostSaga);
}

export default function* postsSaga() {
	yield all([getPostsWatcher(), addPostWatcher()]);
}
