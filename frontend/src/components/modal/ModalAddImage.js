import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import GalleryContext from "../../context/gallery/galleryContext";

const ModalAddImage = (props) => {
  const galleryContext = useContext(GalleryContext);

  const { addPhoto } = galleryContext;

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("choose file");

  const onfileEdit = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onAddPhoto = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    addPhoto(formData);
    setFileName("choose file");
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
          Bild hinzufügen
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => onAddPhoto(e)}>
          <div className="mb-3">
            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input onChange={(e) => onfileEdit(e)} />
              <Form.File.Label data-browse="add image">
                {fileName}
              </Form.File.Label>
            </Form.File>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onAddPhoto} disabled={!file}>
          create
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddImage;
