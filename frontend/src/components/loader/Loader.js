import React from "react";
import { Spinner, Container } from "react-bootstrap";


const spinnerStyle = {
  position:"absolute",
  top:"50%"
}

const Loader = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-content-center w-100 position-relative"
      style={{ minHeight: "100%" }}
    >
      <Spinner animation="border" role="status" style={spinnerStyle}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loader;
