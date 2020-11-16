import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Sonder-banner.png";

const Sonderreinigung = () => {
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
            <h2 className="final-cleaning">Grund- & Sonderreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Für alten neuen Glanz</h3>
            <p className="description-service">
              Wo regelmäßige Reinigung allein nicht ausreicht, bieten wir eine
              regelmäßige spezielle Behandlung und ganz besonders intensive
              Pflege <br />
              an – zum Beispiel für Flächen mit hohem Schmutzeintrag oder
              bestimmte Fußbodenarten. Wir setzen unser gesamtes Spezialwissen
              ein, <br />
              um Ihre Böden wieder strahlen zu lassen: Wir sanieren abgenutzte
              Pflegefilme und entfernen haftende Verschmutzungen oder andere
              <br />
              Rückstände, lösen alte Beschichtungen und pflegen nach einer
              Intensivreinigung neu ein, versiegeln oder imprägnieren. <br />
              <br />
              Dabei gehen wir nicht nur gewissenhaft, sondern auch schonend,
              effektiv und absolut gründlich vor – und reinigen Nischen, Ecken
              und <br />
              Rillen, Fußleisten, Türen und Zargen, Fenster und Fensterbänke,
              Heizkörper, Lamellen und Oberlichter, Lichtschalter und
              Steckdosen, <br />
              Polster und textile Bodenbeläge. Wir lassen nicht locker, bevor
              auch der hartnäckigste Fleck rückstandlos entfernt ist. Und mit
              einer <br />
              fachgerechten Shampoonierung versetzen wir Ihren gesamten Boden in
              einen frischen und optisch erneuerten Zustand.
              <br />
              <br />
              Herausforderungen und Spezialfälle mögen wir besonders – und
              finden mit großer Begeisterung und höchster Konzentration genau
              die <br />
              richtige Methode für jede Reinigungsaufgabe: Egal, ob es um
              Brücken, Tunnel oder Zeltdächer geht oder um die Hygiene in Büros,
              wo <br />
              Tastaturen, Telefone und Computermäuse eine extrem hohe Keim- und
              Bakteriendichte aufweisen. Auf unsere sauberen Lösungen <br />
              können Sie sich verlassen – und schützen so die Gesundheit Ihrer
              Mitarbeiter.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Sonderreinigung;
