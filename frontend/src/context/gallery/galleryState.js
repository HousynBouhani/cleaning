import GalleryContext from "./galleryContext";
import galleryReducer from "./galleryReducer";
import {
  ADD_PHOTO,
  FETCH_PHOTOS,
  DELETE_PHOTO,
  PHOTO_ERROR,
  LOADING,
} from "../types.js";

import { useReducer } from "react";
import axios from "axios";

const GalleryState = (props) => {
  const initialState = {
    photos: [],
    errors: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(galleryReducer, initialState);

  // Fetch photos

  const fetchPhotos = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.get("/api/gallery");
      dispatch({
        type: FETCH_PHOTOS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: PHOTO_ERROR,
        payload: error.response,
      });
    }
  };

  // add a photo

  const addPhoto = async (photo) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    dispatch({ type: LOADING });
    try {
      const response = await axios.post("/api/gallery", photo, config);
      dispatch({
        type: ADD_PHOTO,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: PHOTO_ERROR,
        payload: error.response.data,
      });
    }
  };

  // delete photo

  const deletePhoto = async (id) => {
    try {
      await axios.delete(`/api/gallery/${id}`);
      dispatch({
        type: DELETE_PHOTO,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: PHOTO_ERROR,
        payload: error.response.data,
      });
    }
  };


  
  // Fetch photos

  const fetchPublicPhotos = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.get("/api/images");
      dispatch({
        type: FETCH_PHOTOS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: PHOTO_ERROR,
        payload: error.response,
      });
    }
  };


  return (
    <GalleryContext.Provider
      value={{
        photos: state.photos,
        errors: state.errors,
        loading: state.loading,
        fetchPhotos,
        addPhoto,
        deletePhoto,
        fetchPublicPhotos
      }}
    >
      {props.children}
    </GalleryContext.Provider>
  );
};

export default GalleryState;
