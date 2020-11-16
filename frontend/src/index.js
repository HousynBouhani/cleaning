import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "./context/auth/authState";
import PostsState from "./context/posts/postsState";
import GalleryState from "./context/gallery/galleryState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <AuthState>
    <PostsState>
      <GalleryState>
        <App />
      </GalleryState>
    </PostsState>
  </AuthState>,
  document.getElementById("root")
);
