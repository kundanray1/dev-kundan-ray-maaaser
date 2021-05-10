import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';

// add all the reducer, abd lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;