import {
  FETCH_PHOTOS,
  ADD_PHOTO,
  DELETE_PHOTO,
  PHOTO_ERROR,
  LOADING,
} from "../types.js";

const galleryReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_PHOTO:
      return {
        ...state,
        photos: [action.payload, ...state.photos],
        loading: false,
      };
    case FETCH_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };
    case DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter((photo) => photo._id !== action.payload),
      };
    case PHOTO_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      break;
  }
};

export default galleryReducer;
