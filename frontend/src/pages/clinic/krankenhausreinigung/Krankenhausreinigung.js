import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Kranken-banner.png";

const Krankenhausreinigung = () => {
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
            <h2 className="final-cleaning">
            Krankenhausreinigung
            </h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Für den lebenswichtigen Unterschied </h3>
            <p className="description-service">
              Wenn es um Sauberkeit und Hygiene in Kliniken geht, verlangen wir
              von uns selbst jeden Tag absolute Glanzleistungen. Als erfahrener
              Partner für die tägliche Reinigung und Desinfektion wissen wir:
              Hier kann der Unterschied zwischen sauber und wirklich sauber
              schnell zur Entscheidung zwischen Leben und Tod werden.
            </p>
            <br />
            <p className="description-service">
              Unsere regelmäßig geschulten Reinigungskräfte arbeiten nicht nur
              engagiert und verantwortungsvoll, sondern sind auch jederzeit auf
              dem neuesten Wissensstand. Sie besitzen umfassende Kenntnisse der
              Reinigungs- und Desinfektionspraxis, setzen unsere hochmoderne
              technische Ausstattung mit sicherer Hand ein und kennen
              selbstverständlich mögliche Infektionsquellen,
              Keimverbreitungswege und Infektionsträger – eine unverzichtbare
              Voraussetzung, um gefährliche Krankenhausinfektionen langfristig
              zu verhindern.
            </p>
            <br />
            <p className="description-service">
              Für größtmögliche Sauberkeit in allen Klinikbereichen beschäftigen
              wir hochqualifizierte Reinigungs- und Hygienespezialisten und
              bieten maßgeschneiderte Dienstleistungen rund um das
              Krankenhausgebäude – von Eingangsbereichen, Aufenthalts- und
              Speiseräumen über Schwestern- und Wohnheime, technische Bereiche
              und raumlufttechnische Anlagen bis zu Glasarchitekturen und
              Fassaden. Dabei sind auch schwer zugängliche Bereiche für unsere
              versierten Industrie- und Fassadenkletterer kein Problem.
            </p>
            <br />
            <p className="description-service">
              Wir setzen geräuscharme Maschinen ein und passen die
              Reinigungszeiten selbstverständlich den Abläufen Ihres Hauses an.
              Damit die Patienten die dringend benötige Ruhe erhalten und die
              medizinischen Teams in ihren Abläufen nicht behindert werden.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Krankenhausreinigung;
