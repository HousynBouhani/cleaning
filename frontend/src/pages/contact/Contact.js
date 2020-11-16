import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contact.css";
const Contact = () => {
  return (
    <Container>
      <Row>
        <Col className="w-100">
          <div>
            <h2 className="my-5 d-flex justify-content-center">
              Unsere Standorte
            </h2>

            <a
              href="https://www.google.com/maps/place/Reinheit+%26+Sauberkeit/data=!3m1!4b1!4m2!3m1!1s0x47b071925a934e3f:0x88d3ef7bc91f2c63"
              target="_blank"
              rel="noreferrer"
            >
              <div className="map"></div>
            </a>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="d-flex my-5">
            <ul className="contact-list">
              <li>Adresse : Venushof 6a 30823 Garbsen</li>
              <li>T : +49 157 312 232 22</li>
              <li>T : +49 513 789 041 01</li>
              <li>
                E-Mail:
                <a
                  href="mailto: info@reinheit-sauberkeit.de"
                  className="emailto"
                >
                  info@reinheit-sauberkeit.de
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
