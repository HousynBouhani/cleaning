import React from "react";
//react router
import { Link } from "react-router-dom";
// ui components bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//images
import HomeIcon from "../../assets/images/home.png";
import companyLogo from "../../assets/images/company-logo.png";
// custom css
import "./header.css";
import AuthContext from "../../context/auth/authContext";
import { useContext } from "react";


const Header = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;


  return (
    <Container fluid className="px-0">
      <Row className="mt-2 mb-4 align-items-end w-100">
        <Col md={4}>
          <Link to="/">
            <div className="d-flex justify-content-center">
              <img className="home-icon" src={HomeIcon} alt="home icon" />
            </div>
          </Link>
        </Col>
        <Col md={4}>
          <div className="d-flex justify-content-center">
            <img
              className="company-logo"
              src={companyLogo}
              alt="company logo"
            />
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex justify-content-center work-time">
            <ul>
              <li>Geschaftszeiten:</li>
              <li>Mo-Fr:Von:07:30 bis:18:00 Uhr</li>
              <li>Sa:Von:09:00 bis:12:00 Uhr</li>
            </ul>
          </div>
        </Col>
      </Row>

      <div className="nav-container">
        <div className="navigation-item">
          <Link to="/actualities"> Aktuelle Informationen </Link>
        </div>
        <div className="navigation-item">
          <a
            href={"https://g.page/reinheit-sauberkeit/review?gm"}
            rel="noreferrer"
            target="_blank"
          >
            Kundenbewertungen
          </a>
        </div>
        <div className="navigation-item">
          <Link to="/gallery"> Galerie </Link>
        </div>
        <div className="navigation-item">
          <Link to="/contact"> Kontakt </Link>
        </div>
        <div className={isAuthenticated ? "navigation-item" : "d-none"}>
          <Link to="/admin">
            admin
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
