import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/pharma-banner.png";

const Pharmaproduktion = () => {
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
            <h2 className="final-cleaning">Pharmaproduktionsreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Hygiene ohne Kompromisse</h3>
            <p className="description-service">
              Wenn es um Gesundheit geht, verstehen wir keinen Spaß. Deshalb
              liegt unser Fokus bei der Produktion von medizinischen Geräten,
              Materialien und Medikamenten, von Implantaten und Prothesen auf
              der Gewährleistung höchster Hygienestandards. Wir sind erfahrene
              Profis, für fachgerechte Reinigung und Desinfektion medizinischer,
              medizintechnischer und pharmazeutischer Produktionsanlagen.
            </p>
            <br />
            <p className="description-service">
              Mit speziellen Verfahren, hochmoderner Technologie und
              außergewöhnlichem Know-how finden unsere Teams immer eine saubere
              Lösung und sorgen dafür, dass sämtliche Hygienevorschriften und
              vorgeschriebenen Hygienestandards zuverlässig eingehalten werden.
              Dazu passen wir unsere Reinigungs- und Desinfektionsleistungen
              jederzeit optimal an Ihre individuellen Bedürfnisse an – egal, ob
              Sie steril, ATP-, DNA-, Pyrogen- oder RNAse-frei produzieren.
            </p>
            <br />
            <p className="description-service">
              Unser Rezept für ein Höchstmaß an Sauberkeit und Hygiene ohne
              Kompromisse: enge Zusammenarbeit mit dem Auftraggeber, regelmäßige
              Schulungen vor Ort und abgestimmte Prozesse, bei denen unsere
              Mitarbeiter und Leistungen in das unternehmenseigene
              Qualitätsmanagement eingebunden werden. Darüber hinaus bieten wir
              auch für die notwendigen gebäudetechnischen Einrichtungen
              umfassenden Hygieneschutz, wie z. B. für raumlufttechnische
              Anlagen (RLT).
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Pharmaproduktion;
