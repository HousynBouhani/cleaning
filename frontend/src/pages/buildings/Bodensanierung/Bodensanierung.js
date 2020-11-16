import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Boden-banner.png";

const Bodensanierung = () => {
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
            <h2 className="final-cleaning">Bodensanierung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Schöner Boden unter den Füßen</h3>
            <p className="description-service">
              Wir machen Norddeutschlands Böden nicht nur sauber, sondern
              bringen ihre natürliche Schönheit zurück. Unsere professionelle
              <br />
              Bodenaufarbeitung, -sanierung und -veredelung ist effektiv,
              umweltschonend und eine günstige Alternative zum kosten- und
              <br />
              zeitaufwändigen Austausch verfärbter oder abgenutzter Bodenbeläge.
              Mit der Erfahrung von mehreren Genrationen, einem geschulten
              <br />
              Auge und viel Herzblut beleben wir Natursteinböden (z. B.
              Terrazzo, Marmor und Granit), Estrich- und Betonböden, Zement-,
              Anhydrit-,
              <br />
              Gussasphalt und Magnesia, Parkett- und Dielenböden sowie
              elastische Beläge, wie Linoleum, PVC, Gumminoppen und Kautschuk.
              <br />
              <br />
              Um unnötige Staubentwicklung bei der Bearbeitung von Stein- und
              Holzböden zu vermeiden, verwenden unsere speziell geschulten
              <br />
              Mitarbeiter Diamantscheiben und hochwertige Schleifwerkzeuge im
              Nass- oder staubarmen Trockenschleifverfahren. So verschwinden
              <br />
              Fehlstellen, Löcher und Risse, und durch das anschließende
              Polieren und Imprägnieren oder Versiegeln erhalten Ihre Böden
              neuen Glanz. <br />
              <br />
              Für die Sanierung Ihrer elastischen Böden verwenden wir exklusiv
              im Norden das Spezialsanierungssystem „Bona Elastic System“ – und
              <br />
              machen damit tiefe Kratzer, Verfärbungen, Teilaustausch und andere
              Oberflächenschäden unsichtbar. Auch matten oder abgenutzten <br />
              Stein-, Linoleum-, Parkett- und Naturböden ohne akuten
              Sanierungsbedarf entlocken wir wieder ein Strahlen – mit dem
              nötigen
              <br />
              Fingerspitzengefühl und ohne Chemie oder Beschichtungen.
              <br />
              <br />
              Übrigens: Natürlich demonstrieren wir unser Können gerne an einer
              Probefläche. Testen Sie uns!
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Bodensanierung;
