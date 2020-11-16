import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Unterhalt-banner.png";

const Unterhaltsreinigung = () => {
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
            <h2 className="final-cleaning">Unterhaltsreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Strahlend saubere Gebäude</h3>
            <p className="description-service">
              Unsere volle Konzentration gilt Ihrer Immobilie: Wir sind
              erfahrener Spezialist und zuverlässiger Partner, wenn es um den
              Werterhalt und <br />
              die Pflege Ihres Gebäudes geht und schnüren Ihnen ein
              maßgeschneidertes Rundum-Sorglos-Paket für die tägliche
              Unterhaltsreinigung. <br />
              Für eine saubere und vertrauensvolle Zusammenarbeit stellen wir
              Ihnen einen persönlichen Ansprechpartner für alle Angelegenheiten
              <br />
              rund um Ihre Immobilie zur Seite.
              <br />
              <br />
              Ganz nach Wunsch halten unsere geschulten Mitarbeiter mit wachen
              Augen und routinierten Handgriffen Ihr Inventar makellos sauber,
              <br />
              reinigen Computer und Telefone und pflegen hochprofessionell alle
              Arten von Fußbodenbelägen. Dabei kommen ausschließlich
              <br />
              schonende Reinigungsmittel zum Einsatz, die speziell auf die
              jeweiligen Bereiche abgestimmt sind, zur Werterhaltung beitragen
              und die
              <br />
              Gesundheit nicht beeinträchtigen. Natürlich sorgen wir auch für
              angenehme Frische und verlässliche Sauberkeit im Sanitärbereich –
              <br />
              inklusive einer bedarfsgerechten Befüllung mit Hygieneprodukten,
              wie Seife und Papierhandtüchern.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Unterhaltsreinigung;
