import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { loginReducer } from './../../screens/auth/Login/reducer';
import { signUpReducer } from './../../screens/auth/SignUp/reducer';

// add all the reducer, abd lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  login: loginReducer,
  signUp:signUpReducer,
  posts: postsReducer
});

export default rootReducer;