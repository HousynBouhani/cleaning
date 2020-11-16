import PostsContext from "./postsContext";
import postsReducer from "./postsReducer";
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
import { useReducer } from "react";
import axios from "axios";

const PostsState = (props) => {
  const initialState = {
    posts: [],
    errors: null,
    post: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(postsReducer, initialState);

  // Fetch posts

  const fetchPosts = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.get("api/posts");
      dispatch({
        type: FETCH_POSTS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: POSTS_ERROR,
        payload: error.response,
      });
    }
  };

  // Fetch posts

  const addPost = async (post) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    dispatch({ type: LOADING });
    try {
      const response = await axios.post("api/posts", post, config);
      dispatch({
        type: ADD_POST,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: POSTS_ERROR,
        payload: error.response.data,
      });
    }
  };

  // Fetch post

  const fetchPost = async (id) => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.get(`api/posts/${id}`);
      dispatch({
        type: FETCH_POST,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: POSTS_ERROR,
        payload: error.response.data,
      });
    }
  };

  // update post

  const updatePost = async (id, postDetails) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.put(`api/posts/${id}`, postDetails, config);
      dispatch({
        type: UPDATE_POST,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: POSTS_ERROR,
        payload: error.response.data,
      });
    }
  };

  // delete post

  const deletePost = async (id) => {
    try {
      await axios.delete(`api/posts/${id}`);
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: POSTS_ERROR,
        payload: error.response.data,
      });
    }
  };

  //clear state for post to edit
  const clearPostState = () => {
    dispatch({ type: CLEAR_STATE });
  };

  // Fetch posts News

  const fetchNews = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.get("/api/news");
      dispatch({
        type: FETCH_POSTS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: POSTS_ERROR,
        payload: error.response,
      });
    }
  };

  
  // Fetch posts News

  const fetchlastest = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.get("/api/news/lastest");
      dispatch({
        type: FETCH_POSTS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: POSTS_ERROR,
        payload: error.response,
      });
    }
  };


// Fetch post News

const fetchNewsDetails = async (id) => {
  dispatch({ type: LOADING });
  try {
    const response = await axios.get(`/api/news/${id}`);
    dispatch({
      type: FETCH_POST,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response.data,
    });
  }
};


  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        loading: state.loading,
        errors: state.errors,
        fetchPosts,
        fetchPost,
        updatePost,
        deletePost,
        addPost,
        clearPostState,
        fetchNews,
        fetchlastest,
        fetchNewsDetails
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsState;
