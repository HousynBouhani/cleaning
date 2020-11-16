import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PostsContext from "../../context/posts/postsContext";

const ModalAddPost = (props) => {
  const postsContext = useContext(PostsContext);

  const { addPost } = postsContext;
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("choose file");
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });


  const onfileEdit = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onEditPost = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const onCreatePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("image", file);

    addPost(formData);
    setNewPost({
      title: "",
      content: "",
    });
    setFilename("choose file");
    setFile("");
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
        <Form onSubmit={(e) => onCreatePost(e)}>
          <div className="mb-3">
            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input onChange={(e) => onfileEdit(e)} />
              <Form.File.Label data-browse="add image">
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
                value={newPost.title}
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
                value={newPost.content}
                onChange={(e) => onEditPost(e)}
                rows={10}
              />
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onCreatePost} disabled={!file}>
          create
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddPost;

