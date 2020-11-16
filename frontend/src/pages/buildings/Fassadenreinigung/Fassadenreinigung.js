import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/glass-cleaning.png";

const Fassadenreinigung = () => {
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
            <h2 className="final-cleaning">Fassadenreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Ein makelloser erster Eindruck</h3>
            <p className="description-service">
              Ihr Gebäude ist Ihre Visitenkarte – und wir kümmern uns persönlich
              darum, dass Sie immer einen makellosen ersten Eindruck <br />
              hinterlassen. Als zuverlässiger Partner in Sachen Sauberkeit
              bringen wir bereits seit Generationen Fassaden jeder Bauhöhe in
              ganz <br />
              Norddeutschland zum Glänzen. Dabei lösen wir auch komplizierte
              Verschmutzungsfälle schnell und zuverlässig – auf Oberflächen von
              <br />
              Glas und Metall bis zu Naturstein, Beton oder Putz. <br /> <br />
              Von Reinigungslösungen von der Stange halten wir nichts. Wir gehen
              lieber konzentriert und präzise vor und finden für jede <br />
              Verschmutzung die optimalen Reinigungsmittel und Methoden – ganz
              individuell nach Material und Verschmutzungsgrad. <br />
              Selbstverständlich immer unter Einhaltung der Arbeitssicherheit
              und der von der jeweiligen Kommune geforderten <br />
              Umweltbestimmungen. <br /> <br />
              Und das Beste: Wir sorgen nicht nur für Sauberkeit, sondern
              schützen Ihr Gebäude auch aktiv vor Verschmutzung. Dazu
              imprägnieren <br />
              und konservieren wir Ihre Fassade gegen Schmutz oder
              Umwelteinflüsse, Schadstoffe oder Graffiti. Bei unserer
              Anti-Graffiti- <br />
              Schutzbeschichtung bedecken wir die Fassadenflächen zum Beispiel
              mit einem nahezu unsichtbaren Schutzfilm, der das Eindringen von
              <br />
              Plakatklebstoffen oder Farben erschwert und eine spätere Reinigung
              deutlich vereinfacht und damit kostengünstiger macht.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Fassadenreinigung;
