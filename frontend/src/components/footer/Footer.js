import React from "react";
import { Col } from "react-bootstrap";
// bootstrap Ui
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
// custom css
import "./footer.css";

const Footer = () => {
  return (
    <Container
      fluid
      className="footer-section d-flex align-items-center justify-content-center"
    >
      <Row className="w-100">
        <Col md={12} lg={4} className="p-0">
          <div className="d-flex justify-content-center">
            <ul>
              <li>
                <Link to={"/about-us"}>Über Uns</Link>
              </li>
              <li>
                <Link to={"/data-protection"}>Datenschutzerklärung </Link>
              </li>
              <li>
                <Link to={"/imprint"}> Impressum</Link>
              </li>
              <li>
                <Link to={"/agb"}>AGB</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={12} lg={4} className="p-0">
          <div className="d-flex justify-content-center">
            <ul>
              <li>Venushof 6a 30823 Garbsen</li>
              <li>+49 157 312 232 22</li>
              <li>+49 513 789 041 01</li>
              <li>E-Mail:<a href="mailto: info@reinheit-sauberkeit.de" className="emailto">info@reinheit-sauberkeit.de</a></li>
            </ul>
          </div>
        </Col>
        <Col md={12} lg={4} className="p-0">
          <div className="d-flex justify-content-center">
            <ul>
              <li>Geschäftszeiten:</li>
              <li>Mo-Fr:</li>
              <li>Von:07:30 bis:18:00 Uhr</li>
              <li>Sa:</li>
              <li>Von:09:00 bis:12:00 Uhr</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
