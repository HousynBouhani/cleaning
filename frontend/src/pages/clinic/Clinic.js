import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./clinic.css";
import Awards from "../../components/Awards&memberships/Awards";

// images
import HospitalCleaning from "../../assets/images/Krankenhausreinigung.png";
import PharmaCleaning from "../../assets/images/Pharmaproduktionsreinigung.png";
import Facilities from "../../assets/images/Einrichtungen.png";
import SeniorFacilities from "../../assets/images/Senioreneinrichtungen.png";
import RoomCleaning from "../../assets/images/Reinraumreinigung.png";
import { Link } from "react-router-dom";

const Clinic = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className="service-header">
            <h1 className="service-title">Klinikreinigung</h1>
          </Col>
        </Row>
        <Container>
          <Row className="service-description">
            <h3>Lebenswichtige Hygiene</h3>
            <p>
              Professionelle Hygiene ist in den sensiblen Umgebungen des
              Gesundheitswesens unverzichtbar. In Klinik, Praxis und Labor kann
              der
              <br />
              Unterschied zwischen sauber und wirklich sauber in vielen Fällen
              sogar lebenswichtig sein. Als erfahrener Partner für die tägliche
              <br />
              Reinigung und Desinfektion konzentrieren wir uns seit Generationen
              darauf, für unsere Kunden aus dem Medizin- und
              <br />
              Gesundheitsbereich jeden Tag Höchstleistungen abzuliefern – mit
              hochqualifizierten Spezialisten für jeden Bereich, modernster
              <br />
              technischer Ausstattung und Sauberkeit Besonders im Blut.
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
              <Link to={"/hospital-cleaning"}>
                <img
                  className="mb-4"
                  src={HospitalCleaning}
                  alt="Krankenhausreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/hospital-cleaning"}>
                  <h3>Krankenhausreinigung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/pharma-cleaning"}>
                <img
                  className="mb-4"
                  src={PharmaCleaning}
                  alt="Pharmaproduktionsreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/pharma-cleaning"}>
                  <h3>Pharmaproduktionsreinigung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/facilities"}>
                <img
                  className="mb-4"
                  src={Facilities}
                  alt="Reha-Einrichtungen"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/facilities"}>
                  <h3>Reha-Einrichtungen</h3>
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
              <Link to={"/senior-facilities"}>
                <img
                  className="mb-4"
                  src={SeniorFacilities}
                  alt="Pflege Senioreneinrichtungen"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/senior-facilities"}>
                  <h3>Pflege- & Senioreneinrichtungen</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/room-cleaning"}>
                <img
                  className="mb-4"
                  src={RoomCleaning}
                  alt="Reinraumreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/room-cleaning"}>
                  <h3>Reinraumreinigung</h3>
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

export default Clinic;
