import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Bausch-banner.png";

const Bauschlussreinigung = () => {
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
            <h2 className="final-cleaning">Bauschlussreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Schlüsselfertig sauber</h3>
            <p className="description-service">
              Was von Profis gebaut wurde, sollte auch von Profis gereinigt
              werden. Nach Fertigstellung von Neubau-, Umbau- oder <br />
              Renovierungsarbeiten kümmern wir uns darum, dass bei der
              schlüsselfertigen Übergabe auch die Sauberkeit restlos überzeugt.
              Egal, ob <br />
              Einfamilienhaus oder Einkaufsgalerie, Lagerhalle oder
              Produktionsanlage: Wir befreien sämtliche Oberflächen von
              Arbeitsrückständen, <br />
              wie Mörtel, Gips, Bohrstaub oder Lackspritzern,
              Fugendichtungsmasse, Polyurethanschaum, Schutzfolien oder
              Etiketten. <br />
              <br />
              Unsere speziell geschulten Fachkräfte sorgen mit individuellen
              Methoden für zielgerichtete Einpflege, Versiegelung und
              Imprägnierung <br />
              und ermöglichen damit die Werterhaltung Ihrer hochwertigen
              verbauten Materialien. Wir sind uns der großen Verantwortung
              dieser <br />
              Aufgabe bewusst und arbeiten mit höchster Präzision und
              außergewöhnlicher Liebe zum Detail. Denn erst eine professionelle
              <br />
              Bauschluss- oder Baufeinreinigung macht Ihren Neubau wirklich
              übergabe- und bezugsfertig. So macht auch Ihr Bauunternehmen bei
              der <br />
              Übergabe eines makellosen Gebäudes einen hervorragenden Eindruck.{" "}
              <br /> <br />
              Auch während noch gebaut wird, unterstützen wir gewissenhaft und
              zuverlässig den reibungslosen Ablauf – unter anderem durch <br />
              regelmäßigen Abtransport von Bauschutt und baubegleitende
              Reinigung. Dabei arbeiten wir Hand in Hand mit allen beteiligten{" "}
              <br />
              Gewerken und minimieren so die Unfallgefahr durch herumliegende
              Materialien oder verunreinigte Oberflächen. Ihre Baustelle ist
              eine <br />
              besondere Herausforderung? Umso besser. Sprechen Sie uns einfach
              an: Unsere Spezialisten beraten Sie gerne und finden gemeinsam
              <br />
              die individuelle Lösung, die perfekt zu Ihren Ansprüchen passt.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Bauschlussreinigung;
