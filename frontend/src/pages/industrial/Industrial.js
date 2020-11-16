import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./industrial.css";
import Awards from "../../components/Awards&memberships/Awards";

// images
import Plantcleaning from "../../assets/images/AnlagenreinigungFood.png";
import nonfood from "../../assets/images/AnlagenreinigungNon-Food.png";
import IndustrialWork from "../../assets/images/Industriekletterarbeiten.png";
import VentilationCleaning from "../../assets/images/Lüftungsreinigung.png";
import OverheadCleaning from "../../assets/images/Overheadreinigung.png";
import Blastingprocess from "../../assets/images/Strahlverfahren.png";
import TankCleaning from "../../assets/images/Tank- & Siloreinigung.png";

import { Link } from "react-router-dom";

const Industrial = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className="service-header">
            <h1 className="service-title">Industriereinigung</h1>
          </Col>
        </Row>
        <Container>
          <Row className="service-description">
            <h3>Für Unternehmen, die glänzend dastehen</h3>
            <p>
              Wir schaffen saubere Voraussetzungen, damit sich Unternehmen ganz
              auf ihre Arbeit konzentrieren können. Egal, ob Druckerei oder
              <br />
              Werft, Metallverarbeitung oder Lebensmittelproduktion: Als
              norddeutsches Familienunternehmen mit der Reinigungserfahrung
              mehrerer <br />
              Generationen kennen wir die Anforderungen unterschiedlicher
              Industriezweige bis ins Detail. Wir sorgen dafür, dass Ihr
              Unternehmen <br />
              immer glänzend dasteht – mit höchster Konzentration und einem
              Blick für die nötige Wirtschaftlichkeit, mit Begeisterung für ein
              <br />
              effizientes Umweltmanagement und mit Sauberkeit Besonders im Blut.
            </p>
          </Row>
        </Container>
        <Container className="sevices-list">
          <Row>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/plant-cleaning"}>
                <img
                  className="mb-4"
                  src={Plantcleaning}
                  alt="Anlagenreinigung Food"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/plant-cleaning"}>
                  <h3>Anlagenreinigung Food</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/plant-cleaning-non-food"}>
                <img
                  className="mb-4"
                  src={nonfood}
                  alt="Anlagenreinigung Non-Food"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/plant-cleaning-non-food"}>
                  <h3>Anlagenreinigung Non-Food</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/industrial-Work"}>
                <img
                  className="mb-4"
                  src={IndustrialWork}
                  alt="Industriekletterarbeiten"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/industrial-Work"}>
                  <h3>Industriekletterarbeiten</h3>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/ventilation-cleaning"}>
                <img
                  className="mb-4"
                  src={VentilationCleaning}
                  alt="Lüftungsreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/ventilation-cleaning"}>
                  <h3>Lüftungsreinigung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/overhead-cleaning"}>
                <img
                  className="mb-4"
                  src={OverheadCleaning}
                  alt="Overheadreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/overhead-cleaning"}>
                  <h3>Overheadreinigung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/blasting-process"}>
                <img
                  className="mb-4"
                  src={Blastingprocess}
                  alt="Strahlverfahren"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/blasting-process"}>
                  <h3>Strahlverfahren</h3>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/tank-cleaning"}>
                <img
                  className="mb-4"
                  src={TankCleaning}
                  alt="Tank- & Siloreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/tank-cleaning"}>
                  <h3>Tank- & Siloreinigung</h3>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Industrial;
