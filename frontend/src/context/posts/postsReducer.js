import {
  FETCH_POSTS,
  FETCH_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  POSTS_ERROR,
  LOADING,
  CLEAR_STATE,
} from "../types.js";

const postsReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case POSTS_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_STATE:
      return {
        ...state,
        post: [],
      };
    default:
      break;
  }
};

export default postsReducer;
