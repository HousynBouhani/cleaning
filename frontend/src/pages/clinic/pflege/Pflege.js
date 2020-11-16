import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/senior-banner.png";

const Pflege = () => {
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
            <h2 className="final-cleaning">Pflege & Senioreneinrichtungen</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Für Generationen, seit Generationen</h3>
            <p className="description-service">
              Als norddeutsches Familienunternehmen konzentrieren wir uns
              bereits seit Generationen auf bestmögliche Sauberkeit für alle
              Altersgruppen. Für Pflege- und Senioreneinrichtungen schlägt unser
              Herz besonders leidenschaftlich. Denn hier sorgen Sauberkeit,
              Frische und Hygiene nicht einfach nur für Wohlbefinden, sondern
              können lebenswichtig sein – für Bewohner, die gegenüber
              Infektionen und Erkrankungen häufig besonders anfällig sind oder
              bereits eine nosokomiale Infektion aus einer Klinik mitgebracht
              haben.
            </p>
            <br />
            <p className="description-service">
              In Abstimmung mit Ihrem Hygieneverantwortlichen erstellen wir
              differenzierte Reinigungs-, Hygiene- und Desinfektionspläne, die
              sowohl die besonderen Bedürfnisse Ihrer Bewohner als auch den
              Betriebsablauf berücksichtigen. Unsere Fachkräfte sind speziell
              geschult und verfügen neben umfassender Reinigungs- und
              Desinfektionserfahrung auch über das nötige Wissen zu möglichen
              Infektionsquellen, Keimverbreitungswegen und Infektionsträgern.
              Auf Wunsch vermitteln wir Ihren Mitarbeitern durch Schulungen den
              aktuellen Wissensstand, z. B. in Bezug auf das
              Infektionsschutzgesetz.
            </p>
            <br />
            <p className="description-service">
              Um Ihre Bewohner nicht zu stören, setzen wir geräuscharme
              Reinigungsmaschinen ein und integrieren unsere Unterhaltsreinigung
              selbstverständlich harmonisch in den Tagesablauf.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Pflege;
