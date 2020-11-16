import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import edit from "../../../assets/images/edit.png";
import ModalEditPost from "../../../components/modal/ModalEditPost";
import calendar from "../../../assets/images/calendar.png";
import settings from "../../../assets/images/setting.png";
import trash from "../../../assets/images/delete.png";
import editPen from "../../../assets/images/edit-button.png";
import Loader from "../../../components/loader/Loader";
import "./blog.css";
import PostsContext from "../../../context/posts/postsContext";
import Moment from "react-moment";
import ModalAddPost from "../../../components/modal/ModalAddPost";

const Blog = (props) => {
  const postsContext = useContext(PostsContext);

  const { fetchPosts, posts, fetchPost, post, deletePost } = postsContext;

  // open the edit modal
  const [EditmodalShow, setEditModalShow] = useState(false);

  // open the add modal
  const [AddmodalShow, setAddModalShow] = useState(false);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.history]);

  const openEditModal = (postId) => {
    fetchPost(postId);
    setEditModalShow(true);
  };

  const onDelete = (id) => {
    deletePost(id);
  };

  return (
    <Fragment>
      {post !== null && (
        <ModalEditPost
          postid={post}
          show={EditmodalShow}
          onHide={() => setEditModalShow(false)}
        />
      )}

      <Container className="mt-5">
        <Row>
          <Col>
            <div className="w-100 d-flex justify-content-center">
              <h2>Aktuelle Informationen</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="w-100">
              <img
                className="edit-icon"
                src={edit}
                alt="edit"
                onClick={() => setAddModalShow(true)}
              />
            </div>
          </Col>
          <ModalAddPost
            show={AddmodalShow}
            onHide={() => setAddModalShow(false)}
          />
        </Row>
        {!posts ? (
          <Loader />
        ) : (
          <Row>
            <Col>
              <Table striped bordered hover className="mt-5">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>
                      <img
                        src={calendar}
                        style={{ height: "30px" }}
                        alt="calendar"
                      />
                    </th>
                    <th style={{ textAlign: "center" }}>Post-Titel</th>
                    <th style={{ textAlign: "center" }}>
                      <img
                        src={settings}
                        style={{ height: "30px" }}
                        alt="settings"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.length === 0 ? (
                    <tr>
                      <td colSpan="3"> Füge einen neuen Blog-Beitrag hinzu</td>
                    </tr>
                  ) : (
                    posts.map((post) => {
                      return (
                        <tr key={post._id}>
                          <td style={{ verticalAlign: "middle" }}>
                            <Moment date={post.date} format="DD/MM/YY"></Moment>
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            {post.title}
                          </td>
                          <td>
                            <div className="d-flex w-100 justify-content-center">
                              <Button
                                variant="success"
                                className="mr-2"
                                onClick={() => openEditModal(post._id)}
                              >
                                <img
                                  src={editPen}
                                  style={{ width: "25px" }}
                                  alt="edit"
                                />
                              </Button>
                              <Button
                                variant="danger"
                                onClick={() => onDelete(post._id)}
                              >
                                <img
                                  src={trash}
                                  style={{ width: "25px" }}
                                  alt="trash"
                                />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
};

export default Blog;
