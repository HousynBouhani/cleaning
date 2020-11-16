import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Lüftung-brand.png";

const Lüftungsreinigung = () => {
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
            <h2 className="final-cleaning">Lüftungsreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Zuverlässig frische Luft</h3>
            <p className="description-service">
              Wenn Sie Wert auf ein sauberes Raumklima legen, sind Sie bei uns
              richtig. Damit Sie und Ihre Mitarbeiter gesund bleiben, reinigen
              und pflegen wir Ihre raumlufttechnischen Anlagen (RLT-Anlagen)
              regelmäßig. Damit sichern wir nicht nur die Versorgung mit
              hygienisch einwandfreier Luft, sondern halten auch den
              Strömungswiderstand in den Luftkanälen konstant. Beste
              Voraussetzungen für einen niedrigen Krankenstand, geringe
              Betriebskosten und die langfristige Werterhaltung Ihrer Anlage.
            </p>
            <br />
            <p className="description-service">
              Unsere Fachkräfte sind nach VDI 6022 (Kategorie A und B) geschult,
              beugen der Entwicklung von Bakterien und Pilzen effektiv vor und
              entfernen auch Staub, Verunreinigungen und Schadgase – ohne
              Kompromisse und lange bevor sie in belüftete oder klimatisierte
              Innenräume gelangen und zu gesundheitlichen Problemen führen
              können.
            </p>
            <br />
            <p className="description-service">
              Natürlich reinigen wir auch alle anderen Arten von
              luftdurchströmten Anlagen und Geräten, wie Ventilatoren, Luft- und
              Fettfangfilter sowie Dunstabzugshauben. Und um spätere Reinigungs-
              und Wartungsarbeiten schneller durchführen zu können, übernehmen
              wir bei Bedarf auch den Einbau von Revisionsklappen in Ihre
              Lüftungssysteme.
            </p>
            <br />
            <p className="description-service">
              Um bei diesen Themen immer bestens für Sie informiert und auf dem
              neuesten Stand der Entwicklungen zu sein, sind wir Mitglied im
              Fachverband Gebäude-Klima e. V. (FGK) - dem führenden
              Branchenverband der deutschen Klima- und Lüftungswirtschaft.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Lüftungsreinigung;
