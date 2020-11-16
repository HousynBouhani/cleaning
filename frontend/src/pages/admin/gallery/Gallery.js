import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import backarrow from "../../../assets/images/leftarrow.png";
import AdminNavbar from "../navbar/AdminNavbar";
import trash from "../../../assets/images/delete.png";
import "./gallery.css";
import edit from "../../../assets/images/edit.png";
import ModalAddImage from "../../../components/modal/ModalAddImage";
import GalleryContext from "../../../context/gallery/galleryContext";

const Gallery = (props) => {
  // open the add modal
  const [modalShow, setModalShow] = useState(false);

  const galleryContext = useContext(GalleryContext);

  const { fetchPhotos, photos, deletePhoto } = galleryContext;

  const onDelete = (id) => {
    deletePhoto(id);
  };

  useEffect(() => {
    fetchPhotos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.history]);

  return (
    <Fragment>
      <AdminNavbar />
      <Container>
        <Row>
          <Col>
            <div className="back-arrow-container mt-5">
              <Link to="/admin">
                <img className="back-arrow" src={backarrow} alt="prev" />
              </Link>
            </div>
            <div className="w-100 d-flex justify-content-center ">
              <h2>Galerie</h2>
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
                onClick={() => setModalShow(true)}
              />
            </div>

            <ModalAddImage
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
        <Row className="text-center text-lg-left mt-5">
          {!photos || photos.length === 0 ? (
            <div className="w-100 d-flex justify-content-center">
              add photos to gallery
            </div>
          ) : (
            photos.map((photo) => {
              return (
                <Col xs={12} sm={12} md={6} lg={4} key={photo._id}>
                  <div className="mb-3 d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        className="img-fluid img-thumbnail  image-gallery"
                        src={`http://localhost:3000/${photo.image}`}
                      />
                      <Card.Body className="d-flex justify-content-center">
                        <Button variant="danger">
                          <img
                            className="remove-image"
                            src={trash}
                            alt="trash"
                            onClick={(e) => onDelete(photo._id)}
                          />
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Gallery;
