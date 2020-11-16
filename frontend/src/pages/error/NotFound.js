import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
//images
import HomeIcon from "../../assets/images/home.png";
const NotFound = () => {
  const errorStyle = {
    fontSize: "30px",
    color: "#00c5f0",
    fontFamily: "Brown-Bold",
    textAlign: "center",
  };
  return (
    <Container>
      <Row className="w-100">
        <Col>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "500px" }}
          >
            <p style={errorStyle}>
              404 Seite nicht gefunden <br />
              <Link to={"/"}>
                <img
                  className="home-icon ml-4"
                  src={HomeIcon}
                  alt="home icon"
                />
              </Link>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default NotFound;
