import {
  ADD_POST,
  ADD_POST_FAILED,
  ADD_POST_SUCCESS,
  GET_POSTS,
  GET_POSTS_FAILED,
  GET_POSTS_SUCCESS,
} from './../actions/PostsActions';

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

export const postsReducer=(state = initialState, { type, payload }) => {
  switch (type) {

    case GET_POSTS:
    return {
        ...state,
        isLoading: true,
      };

    case ADD_POST:
      return { 
      	...state, 
      	isLoading: true 
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        isLoading: false,
      };

    case GET_POSTS_FAILED:
    return {
        ...state,
        isLoading: false,
        error:'Sorry error'
      };

    case ADD_POST_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, payload],
      };
      
    default:
      return state;
  }
};

  