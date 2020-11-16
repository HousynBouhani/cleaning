import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Haushalt-banner.png";

const Haushaltsreinigung = () => {
  return (
    <Fragment>
      <Container fluid className="service-banner p-0">
        <Row>
          <Col>
            <img className="banner" src={banner} alt="banner" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <h2 className="final-cleaning">Haushaltsreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <p className="description-service">
              Reinigen ist unser Steckenpferd und wir können Sie als gelernter
              Hauswirtschafter sehr gut darin <br />
              unterstützen. wir reinigen für folgende Bereiche: <br />
              Badezimmer: Waschbecken, Toilette und Dusche/Badewanne schrubben;
              Spiegel abwischen <br />
              Küche: Geschirr spülen, Rückwand, Herd, Arbeitsflächen und Geräte
              reinigen/ abwischen. <br />
              Böden: Böden saugen, fegen, und /oder wischen je nach Wunsch
              <br />
              Abstauben: Möbel, harte Oberflächen und Fensterbänke. <br />
              Aufräumen: Ordnen und Organisieren <br />
              Müll/Recycling Abfall nach draußen bringen und neue Beutel
              einsetzen. <br /> <br />
              Möglichkeit der sofort Buchung und wieder Buchung <br />
              Perfekt für Vertretungen und Krankheitsfälle
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Haushaltsreinigung;
