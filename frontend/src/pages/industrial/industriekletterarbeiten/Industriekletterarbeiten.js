import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Industriek-banner.png";

const Industriekletterarbeiten = () => {
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
            <h2 className="final-cleaning">Industriekletterarbeiten</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Für höhere Aufgaben</h3>
            <p className="description-service">
              Je höher und je anspruchsvoller, desto besser. Unsere
              qualifizierten Kletterteams erledigen am liebsten komplizierte
              Aufgaben in nahezu allen schwer zugänglichen Bereichen schnell,
              sorgfältig und sicher. Wir reinigen, warten und inspizieren z. B.
              Windkraft- und Solaranlagen, montieren Leucht- und
              Werbemittelanlagen, Taubenabwehr- oder Blitzschutzanlagen und
              pflegen Bäume. Was immer Sie brauchen: Wir entwickeln ein
              individuelles Dienstleistungspaket für Sie, das sich optimal in
              das Qualitätsmanagement Ihres Unternehmens einfügt.
            </p>
            <br />
            <p className="description-service">
              Unsere Mitarbeiter in luftiger Höhe sind nicht nur Spezialisten
              für Sonderreinigungen oder Wartungsarbeiten, sondern auch
              zertifizierte Industriekletterer – mit viel Know-how in Bezug auf
              die jeweilige Dienstleistung und mit Sicherheit bei ausgefeilten
              Seilzugtechniken. Wir sind zertifiziert nach FISAT (Fach- und
              Interessenverband für seilunterstützte Arbeitstechnik e. V.), DIN
              EN ISO 9001 und nach dem SGU-Managementsystem (Sicherheits-,
              Gesundheits- und Umweltschutz) nach SCC-Checkliste.
            </p>
            <br />
            <p className="description-service">
              Dabei nutzen wir moderne Reinigungsverfahren ohne Chemie und
              kümmern uns auf Wunsch auch um die umweltgerechte Entsorgung von
              Montageabfällen, Baumschnitt und Abwässern. Und damit Sie uns auch
              ganz oben über die Schulter gucken können, dokumentieren wir
              unsere ausgeführten Tätigkeiten oder vorhandene Schäden per
              Protokoll und durch Fotos – für seriöse Kostenschätzungen und als
              Argumentationshilfe gegenüber Versicherungen.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Industriekletterarbeiten;
