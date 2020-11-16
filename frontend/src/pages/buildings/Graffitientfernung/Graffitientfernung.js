import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/grafetiBanner.png";

const Graffitientfernung = () => {
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
            <h2 className="final-cleaning">Graffitientfernung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Fleckenlose Flächen</h3>
            <p className="description-service">
              Wir sind wahre Künstler im Umgang mit verschmutzten Oberflächen
              und beseitigen so gut wie jeden unerwünschten Farbfleck: <br />
              gewissenhaft und mit modernsten Geräten und Methoden, in Ihrem
              Interesse immer mit der Wirtschaftlichkeit im Blick, schonend für
              <br />
              Umwelt und Material und natürlich unter Einhaltung aller
              gesetzlichen Bestimmungen. <br />
              <br />
              Egal, ob Gebäude oder Verkehrsmittel und von der Fassade bis zum
              Sanitärbereich: Wir reinigen Stein, Metall oder Holz ohne die
              <br />
              entsprechende Oberfläche abzutragen oder auch nur anzugreifen.
              Unser Versprechen: makellose Sauberkeit und faire Kosten. <br />
              <br />
              Als Reinigungsdienstleister mit Sauberkeit im Blut sind wir nicht
              nur Spezialisten für die Entfernung unerwünschter Verschmutzung,
              <br />
              sondern auch für den aktiven Schutz Ihres Gebäudes. Bei unserer
              Anti-Graffiti-Schutzbeschichtung bedecken wir die Fassadenflächen
              mit <br />
              einem nahezu unsichtbaren Schutzfilm, der das Eindringen von
              Plakatklebstoffen oder Farben erschwert und eine spätere Reinigung
              <br />
              deutlich vereinfacht und damit bares Geld spart.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Graffitientfernung;
