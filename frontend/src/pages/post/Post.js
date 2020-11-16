import React, { useContext, useEffect, useState } from "react";
import PostsContext from "../../context/posts/postsContext";
import Moment from "react-moment";

const Post = (props) => {
  const postsContext = useContext(PostsContext);

  const { fetchNewsDetails, post } = postsContext;

  const [postId, setPostId] = useState(props.match.params.id);

  useEffect(() => {
      if (props.match.params.id) {
        setPostId(props.match.params.id);
        fetchNewsDetails(postId);
      } 
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId,props.history]);

  return (
    <div className="container">
      <div className="row">
        <div className="w-100 col">
          <div className="my-5 d-flex justify-content-center">
            <h2>Aktuelle Informationen</h2>
          </div>
        </div>
      </div>

      {post.length === 0 && !post ? (
        <div
          className="d-flex justify-content-center w-100"
          style={{ height: "350px" }}
        >
       
          Noch keine Beiträge
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12" key={post._id}>
            <div
              className="card mb-4 box-shadow"
              style={{ boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .05)" }}
            >
              <img
                className="card-img-top"
                src={`http://localhost:5000/${post.image}`}
                alt="Card"
              />
              <div className="card-body">
                <p className="card-text">{post.title}</p>
                <p className="card-text">{post.content}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted mt-5">
                    <Moment date={post.date} format="DD/MM/YY"></Moment>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
