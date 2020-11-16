import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/reinra-banner.png";

const Reinraumreinigung = () => {
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
            <h2 className="final-cleaning">Reinraumreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Sauberkeit vom Feinsten</h3>
            <p className="description-service">
              Mit höchster Konzentration und einem wachen Auge für jedes Detail
              machen wir Ihre besonders sensiblen Bereiche für die Produktion
              medizinischer, medizintechnischer und pharmazeutischer und
              Hightech-Produkte nicht einfach sauber, sondern makellos rein –
              entsprechend den hohen Anforderungen von Reinraumklassifikation
              ISO 14644-1.
            </p>
            <br />
            <p className="description-service">
              Damit Sie ohne Einschränkung auf höchstem Niveau produzieren
              können, bringt unser speziell geschultes Fachpersonal sämtliche
              Reinraumklassen und Anwendungsbereiche zuverlässig auf den
              geforderten Standard – von Wand- und Deckensystemen, mobilen
              Reinraumcontainern, -zellen, -kabinen und -zelten bis hin zu
              Schleusen, Luftduschen und anderen sensiblen Bereichen.
            </p>
            <br />
            <p className="description-service">
              Wir erledigen sämtliche Arbeitsschritte gewissenhaft, mit großer
              Begeisterung und mit erfahrener Hand, übernehmen die Vor-, Fein-
              und Feinstreinigung und stellen Ihnen natürlich eine umfassende
              und punktgenaue Dokumentation unserer Leistungen zur Verfügung.
            </p>
            <p className="description-service">
              Wir erstellen individuelle Reinigungs- und Desinfektionspläne,
              führen kontinuierliche Schulungen durch und sensibilisieren Ihre
              Mitarbeiter für die vielen kleinen Handgriffe, die
              verantwortungsvolles Verhalten und sorgfältige Selbstkontrolle im
              Reinraum nötig machen. So sorgen wir für vorbildliche Sauberkeit
              in Reinräumen im Weißbereich (Klasse 5 bis 100), im Graubereich
              mit Geräten (Klasse 1.000 bis 10.000) und auch im Schwarzbereich
              (Außenwelt, Klasse 100.000 und höher).
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Reinraumreinigung;
