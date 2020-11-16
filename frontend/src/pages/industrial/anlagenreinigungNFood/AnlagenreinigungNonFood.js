import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/nfood.png";

const AnlagenreinigungNonFood = () => {
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
            <h2 className="final-cleaning">Anlagenreinigung Non-Food</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Für eine blitzsaubere Produktion</h3>
            <p className="description-service">
              Wir geben alles, damit Ihre Maschinen jederzeit reibungslos
              funktionieren. Unsere Teams sind speziell geschult, bilden sich
              regelmäßig fort und lösen für Sie in kürzester Zeit und mit
              modernsten Mitteln auch die kniffligsten Verschmutzungsfälle.
              Dabei haben wir bei aller Sorgfalt auch die Uhr immer im Blick und
              reduzieren die Stillstandzeiten Ihrer Anlage auf ein Minimum.
            </p>
            <br />
            <p className="description-service">
              Wir reinigen Ihre Maschinen im Trocken-, Feucht- und
              Nassverfahren, befreien sie zuverlässig von Produktionsrückständen
              und entfernen auch hartnäckige Verkrustungen fachgerecht und
              rückstandlos. Auch regelmäßige Wartungsarbeiten erledigen wir
              kompetent und mit größter Sorgfalt, z. B. Filter- und
              Emulsionswechsel. Und natürlich überprüfen wir nach erfolgreicher
              Reinigung die Funktionsfähigkeit Ihrer Maschinen.
            </p>
            <br />
            <p className="description-service">
              Zu unseren besonderen Stärken zählen neben regelmäßigen
              Reinigungsleistungen in erster Linie Sonderreinigungen und
              spezielle Reinigungsverfahren, wie die Hochdruckreinigung. Dabei
              strahlen wir bis zu 130°C heißes aufbereitetes Wasser mit einem
              Druck von bis zu 2.500 bar auf die zu bearbeitende Fläche.
              Temperatur und Wasserdruck regulieren wir genau so, dass sie
              optimal auf das jeweilige Material und den Verschmutzungsgrad
              abgestimmt sind. Diese Methode eignet sich hervorragend zur
              Entfernung großflächiger, stark anhaftender Verschmutzungen, wie
              z. B. durch Schweröl, Fette oder Kalk.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default AnlagenreinigungNonFood;
