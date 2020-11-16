import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Treppen-banner.png";

const Treppenhausreinigung = () => {
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
            <h2 className="final-cleaning">Treppenhausreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <p className="description-service">
              Das Treppenhaus ist ein ganz wichtiger Teil Deiner Immobilie und
              gleichzeitig die Visitenkarte Deiner Räumlichkeiten. <br />
              Schließlich gewinnen Deine Gäste, Kunden oder Mieter bereits im
              Treppenhaus einen ersten Eindruck. <br /> <br />
              Nach Hause kommen fängt schon im Eingangsbereich an. Wir reinigen
              Treppenhäuser und Hausflure aller Art und Größe und sorgen dafür,
              dass alles einladend aussieht. <br />
              <br />
              Unser Team ist speziell ausgerüstet und unsere Arbeitsabläufe sind
              genau geplant - so arbeiten wir <br />
              pünktlich und gründlich. <br />
              <br />
              Wir bringen jedes Treppenhaus zum Glänzen.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Treppenhausreinigung;
