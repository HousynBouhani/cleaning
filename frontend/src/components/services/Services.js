import React from "react";
// bootstrap Ui
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// custom UI
import "./services.css";
// images assets
import buildingCleaning from "../../assets/images/BuildingCleaning.png";
import industrielCleaning from "../../assets/images/IndustrialCleaning.png";
import clinicCleaning from "../../assets/images/ClinicCleaning.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services mt-5">
      <Container>
        <h2 className="text-center">Leistungsbereiche</h2>
        <Row className="services-section">
          <Col className="mb-5">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-4">
                <Link to={"/Buildings"}>
                  <img src={buildingCleaning} alt="building Cleaning" />
                </Link>
              </div>
              <Link to={"/Buildings"}>
                <h3>Gebäudereinigung</h3>
              </Link>

              <p className="text-center">
                Wir reinigen Räume, Fenster und Fassaden, pflegen Einrichtung 
                und  <br /> Außenbereiche  und kümmern uns um
                Schädlingsbekämpfung und <br />
                Hygienesicherung.
              </p>
            </div>
          </Col>
          <Col className="mb-5">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-4">
                <Link to={"/industriels"}>
                  <img src={industrielCleaning} alt="industriel Cleaning" />
                </Link>
              </div>
              <Link to={"/industriels"}>
                <h3>Industriereinigung</h3>
              </Link>

              <p className="text-center">
                Wir erfüllen spezielle Anforderungen <br /> unterschiedlicher
                Industriezweige – <br /> professionell und sicher,
                wirtschaftlich und 
                mit einem effizienten <br /> Umweltmanagement.
              </p>
            </div>
          </Col>
          <Col className="mb-5">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-4">
                <Link to={"/clinics"}>
                  <img src={clinicCleaning} alt="clinic Cleaning" />
                </Link>
              </div>
              <Link to={"/clinics"}>
                <h3>Klinikreinigung</h3>
              </Link>

              <p className="text-center">
                Wir liefern Höchstleistungen bei der  täglichen Reinigung
                und Desinfektion – mit qualifizierten Spezialisten,
                modernster
                technischer Ausstattung und Leidenschaft für Sauberkeit.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
