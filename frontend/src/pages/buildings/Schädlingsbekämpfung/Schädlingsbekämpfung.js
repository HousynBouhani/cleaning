import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Schädling-banner.png";

const Schädlingsbekämpfung = () => {
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
            <h2 className="final-cleaning">Schädlingsbekämpfung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Krabbelfreie Sauberkeit</h3>
            <p className="description-service">
              Wenn es um Schädlinge geht, ist unsere Arbeit erst zu Ende, wenn
              wir erneuten Befall sicher verhindert haben. Weil uns der Schutz
              Ihrer <br />
              Gesundheit und Ihrer Gebäude oder Anlagen am Herzen liegt,
              entwickeln wir für jeden Befall ein passgenaues Konzept zur <br />
              wirkungsvollen und nachhaltigen Schädlingsbekämpfung. So entfernen
              wir Vorrats- oder Hygieneschädlinge (z. B. Ratten, Mäuse oder
              <br />
              Mehlmotten, Kornkäfer, Schaben oder Silberfische),
              Materialschädlinge (z. B. Kleidermotten) und Lästlinge (z. B.
              Ameisen, Asseln oder <br />
              Wespen). <br />
              <br />
              Dabei handeln wir auf der Basis langjähriger Erfahrung, mit viel
              Augenmaß und natürlich äußerster Diskretion. Unsere speziell
              <br />
              ausgebildeten Mitarbeiter analysieren die Situation und lösen Ihr
              Schädlingsproblem schnell, wirkungsvoll und mit professionellen
              <br />
              Mitteln – immer gefährlich für den Schädling, aber sicher für
              Mensch und Haustier. Damit Sie auch langfristig vor einem erneuten
              Befall <br />
              sicher sind, führen wir vorbeugende Maßnahmen und regelmäßige
              Überwachungen durch und übernehmen auf Wunsch mit dem <br />
              digitalen Managementsystem HYGiTEC ein professionelles Monitoring,
              das jederzeit online abrufbar ist. <br /> <br />
              Wir agieren verantwortungsvoll und gemäß den Anforderungen nach
              HACCP (Hazard Analysis and Critical Control Points) und IFS <br />
              Food (International Featured Standards Food), sind Mitglied im
              Deutschen Schädlingsbekämpfer Verband e. V. (DSV) und beschäftigen
              <br />
              selbstverständlich IHK-geprüfte Schädlingsbekämpfer. Darüber
              hinaus verfügen wir über das nötige Know-how und die Technik für
              <br />
              effektiven Gesundheits- und Pflanzenschutz, Vorratsschutz
              (fachgerechte Bekämpfung im Sprüh- und ULV-Verfahren),
              Desinfektion, <br />
              Mardervergrämung, Vogel- und speziell Taubenabwehr und bieten
              Produkte zur Schädlingsbekämpfung (z. B. Fliegenfanggeräte und
              <br />
              Köderfallen).
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Schädlingsbekämpfung;
