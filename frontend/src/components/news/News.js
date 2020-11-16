import React, { useContext, useEffect } from "react";
import PostsContext from "../../context/posts/postsContext";
import { Link } from "react-router-dom";
import Moment from "react-moment";
// bootstrap Ui
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// custom css
import "./news.css";

const News = (props) => {
  const postsContext = useContext(PostsContext);

  const { fetchlastest, posts } = postsContext;

  useEffect(() => {
    fetchlastest();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.history]);

  return (
    <div className="news">
      <Container>
        <h2 className="text-center mb-0">News und Infos</h2>
        <Row className="news-section justify-content-center">
          {posts.length === 0 ? (
            <div
              className="d-flex justify-content-center w-100"
              style={{ height: "350px" }}
            >
              Noch keine Beiträge
            </div>
          ) : (
            posts.map((post) => {
              return (
                <div className="col-sm-12 col-md-6 " key={post._id}>
                  <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                      <div className="mb-1 text-muted">
                        <Moment date={post.date} format="DD/MM/YY"></Moment>
                      </div>
                      <p className="card-text mb-auto">{post.title}</p>
                      <Link to={`post/${post._id}`}>Weiterlesen</Link>
                    </div>
                    <img
                      className="card-img-right flex-auto d-none d-md-block"
                      src={`http://localhost:5000/${post.image}`}
                      alt="blog"
                      style={{ width: "200px", height: "250px" }}
                    />
                  </div>
                </div>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
};

export default News;
