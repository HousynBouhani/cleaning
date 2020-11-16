import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./building.css";
import Awards from "../../components/Awards&memberships/Awards";

// images
import finalCleaning from "../../assets/images/Bauschlussreinigung.png";
import soilClean from "../../assets/images/bodensanierung.png";
import FacadeCleaning from "../../assets/images/Fassadenreinigung.png";
import glassCleaning from "../../assets/images/Glasreinigung.png";
import grafetiCleaning from "../../assets/images/Graffitientfernung.png";
import BasiCleaning from "../../assets/images/Grund&Sonderreinigung.png";
import HallCleaning from "../../assets/images/Hallenreinigung.png";
import PestControl from "../../assets/images/Schädlingsbekämpfung.png";
import MaintenanceCleaning from "../../assets/images/Unterhaltsreinigung.png";
import StairwellCleaning from "../../assets/images/Treppenhausreinigung.png";
import HouseCleaning from "../../assets/images/Haushaltsreinigung.png";
import { Link } from "react-router-dom";

const Buildings = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className="service-header">
            <h1 className="service-title">Gebäudereinigung</h1>
          </Col>
        </Row>
        <Container>
          <Row className="service-description">
            <h3>Für einen gepflegten In Hannover und Umgebung</h3>
            <p>
              Wir lieben saubere Gebäude. Mit der Erfahrung mehrerer
              Generationen, modernster High-End-Technologie und der
              konzentrierten <br />
              Begeisterung echter Reinigungsprofis bieten wir das komplette
              Leistungsportfolio in den Bereichen Gebäudereinigung und <br />
              Flächenmanagement: Im gesamten Norden reinigen wir für Sie Räume,
              Fenster und Fassaden, pflegen Einrichtungen und <br />
              Außenbereiche, kümmern uns um Schädlingsbekämpfung und
              Hygienesicherung und dokumentieren unsere Leistungen gewissenhaft,
              <br />
              lasergenau und mit der Extraportion Sauberkeit Besonders im Blut.
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
              <Link to={"/final-cleaning"}>
                <img
                  className="mb-4"
                  src={finalCleaning}
                  alt="Bauschlussreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/final-cleaning"}>
                  <h3>Bauschlussreinigung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/soil-cleaning"}>
                <img className="mb-4" src={soilClean} alt="Bodensanierung" />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/soil-cleaning"}>
                  <h3>Bodensanierung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/facade-cleaning"}>
                <img
                  className="mb-4"
                  src={FacadeCleaning}
                  alt="Fassadenreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/facade-cleaning"}>
                  <h3>Fassadenreinigung</h3>
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
              <Link to={"/glass-cleaning"}>
                <img className="mb-4" src={glassCleaning} alt="Glasreinigung" />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/glass-cleaning"}>
                  <h3>Glasreinigung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/grafeti-cleaning"}>
                <img
                  className="mb-4"
                  src={grafetiCleaning}
                  alt="Graffitientfernung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/grafeti-cleaning"}>
                  <h3>Graffitientfernung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/basic-cleaning"}>
                <img
                  className="mb-4"
                  src={BasiCleaning}
                  alt="Grund- & Sonderreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/basic-cleaning"}>
                  <h3>Grund- & Sonderreinigung</h3>
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
              <Link to={"/hall-cleaning"}>
                <img
                  className="mb-4"
                  src={HallCleaning}
                  alt="Hallenreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/hall-cleaning"}>
                  <h3>Hallenreinigung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/pest-control"}>
                <img
                  className="mb-4"
                  src={PestControl}
                  alt="Schädlingsbekämpfung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/pest-control"}>
                  <h3>Schädlingsbekämpfung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/maintenance-cleaning"}>
                <img
                  className="mb-4"
                  src={MaintenanceCleaning}
                  alt="Unterhaltsreinigung"
                />{" "}
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/maintenance-cleaning"}>
                  <h3>Unterhaltsreinigung</h3>
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
              <Link to={"/stairwell-cleaning"}>
                <img
                  className="mb-4"
                  src={StairwellCleaning}
                  alt="Treppenhausreinigung"
                />{" "}
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/stairwell-cleaning"}>
                  <h3>Treppenhausreinigung</h3>
                </Link>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="d-flex justify-content-center flex-column align-items-center service-bubble"
            >
              <Link to={"/house-cleaning"}>
                <img
                  className="mb-4"
                  src={HouseCleaning}
                  alt="Haushaltsreinigung"
                />
              </Link>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/house-cleaning"}>
                  <h3>Haushaltsreinigung</h3>
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

export default Buildings;
