import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Hallenrein-banner.png";

const Hallenreinigung = () => {
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
            <h2 className="final-cleaning">Hallenreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Für gepflegten Grund und Boden</h3>
            <p className="description-service">
              Kaum eine Gebäudefläche wird so stark belastet und soll
              gleichzeitig so hohe Ansprüche erfüllen – in Bezug auf
              Belastbarkeit und <br />
              Schmutzresistenz, auf ihre Optik und andere spezifische
              Eigenschaften. <br />
              <br />
              Wir machen Ihre Böden wieder fit – mit viel Herz und individuellem
              Service von den Sauberkeitsspezialisten und von Naturstein oder{" "}
              <br />
              Kunststoff bis zu Parkett, Beton oder Estrich. Dabei reinigen,
              pflegen und polieren wir nicht nur mit umweltfreundlichen
              Methoden, <br />
              sondern retten, reinigen und schützen auch alle elastischen
              Bodenbeläge, wie PVC, Linoleum, Korklinoleum, Polyolefin oder
              Gummi. <br />
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Hallenreinigung;
