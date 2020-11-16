import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PostsContext from "../../context/posts/postsContext";
import Loader from "../loader/Loader";

const ModalEditPost = (props) => {
  const postsContext = useContext(PostsContext);

  const { post, loading, updatePost, clearPostState } = postsContext;
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("choose file");
  const [postDetails, setPostDetails] = useState({
    title: "",
    content:"" ,
  });

  useEffect(() => {
    setPostDetails({
      title: post.title ? post.title : "",
      content: post.content ? post.content : ""
    });
  }, [post]);


  
  const onfileEdit = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };


  const onEditPost = (e) => {
    setPostDetails({
      ...postDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdatePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", postDetails.title);
    formData.append("content", postDetails.content);
    formData.append("image", file);
    
    updatePost(post._id, formData);
    clearPostState();
    setFile("")
    props.onHide();
  };

  const onCloseModal = () => {
    clearPostState();
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Beitrag schreiben
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading ? (
          <Loader />
        ) : (
          <Form onSubmit={(e) => onUpdatePost(e)}>
            <div className="mb-3">
              <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input  onChange={(e) => onfileEdit(e)}  />
                <Form.File.Label data-browse="Button text">
                {fileName}
                </Form.File.Label>
              </Form.File>
            </div>
            <div className="mb-3">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Titel</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={postDetails.title}
                  onChange={(e) => onEditPost(e)}
                  placeholder="Blog-Titel"
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Blogeintrag</Form.Label>
                <Form.Control
                  as="textarea"
                  name="content"
                  value={postDetails.content}
                  onChange={(e) => onEditPost(e)}
                  rows={10}
                />
              </Form.Group>
            </div>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onUpdatePost} disabled={!file}>
          create
        </Button>
        <Button variant="danger" onClick={onCloseModal}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditPost;
