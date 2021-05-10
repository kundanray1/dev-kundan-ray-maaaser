import { Posts } from "./../ActionTypes";

const initialState = {
  posts: [],
  status: "loading",
  error: null,
};
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Posts.fetchPosts:
      return {
        ...state,
        status: "loading",
      };

    case Posts.fetchPostsSuccess:
      return {
        ...state,
        posts: action.payload,
        status: "succeeded",
      };

    case Posts.fetchPostsError:
      return {
        ...state,
        status: "Failed",
        error: action.error,
      };

    default:
      return initialState;
  }
};
