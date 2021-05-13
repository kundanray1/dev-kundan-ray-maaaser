import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { postsReducer } from './postsReducer';


// add all the reducer, abd lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});

export default rootReducer;