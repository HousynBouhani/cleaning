import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Silorein-banner.png";

const Siloreinigung = () => {
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
            <h2 className="final-cleaning">Tank & Siloreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Einwandfreie Lagerung</h3>
            <p className="description-service">
              Wir bringen Norddeutschlands Lagerbehältnisse zum Strahlen – und
              zwar von außen und von innen. Unsere technisch versierten Teams
              reinigen und desinfizieren, imprägnieren und versiegeln Tanks,
              Silos und Förderanlagen jeder Größe aus Edelstahl, Stein und
              Kunststoff. Mit der Erfahrung eines seit Generationen führenden
              Reinigungsdienstleisters wählen wir dabei die effektivste
              Reinigungsmethode für ein optimales Ergebnis – egal, ob Futter-
              und Lebensmittel, Baustoffe oder Flüssigkeiten eingelagert werden.
            </p>
            <br />
            <p className="description-service">
              Dabei kombinieren wir sorgfältige Handarbeit und modernste
              Technik: Im Auftrag makelloser Sauberkeit kommen dabei neben der
              manuellen Reinigung mit Bürsten und Pads zum Beispiel Trockeneis-,
              Sand- und Höchstdruckstrahltechniken zum Einsatz. Wir halten
              sämtliche Sicherheitsvorschriften ein – für unfallfreies Arbeiten
              und langfristigen Schutz für Produkt und Materialien.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Siloreinigung;
