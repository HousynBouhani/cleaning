import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Anlagenr-banner.png";

const AnlagenreinigungFood = () => {
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
            <h2 className="final-cleaning">Anlagenreinigung Food</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Für appetitliche Lebensmittel</h3>
            <p className="description-service">
              Unser Herz schlägt für eine hygienische Lebensmittelherstellung.
              Deshalb bieten wir unseren Kunden seit mehreren Generationen mit
              viel Know-how und großer Begeisterung professionelle Leistungen
              rund um die makellose Anlagenreinigung – von sämtlichen
              klassischen Reinigungs- und Desinfektionsmaßnahmen bis zu
              außergewöhnlichen Aufgaben, speziellen Verfahren und
              Sonderreinigungen.
            </p>
            <br/>
            <p className="description-service">
              Unsere Teams arbeiten effizient und hochkonzentriert, passen sich
              an Ihre bestehenden Prozesse an und reduzieren die
              Stillstandzeiten Ihrer Produktion auf ein Minimum. Wir reinigen
              sämtliche Maschinen in acht Schritten, die individuell an Ihre
              Anlage abgestimmt werden. Dabei sind wir technisch und methodisch
              immer auf dem neuesten Stand, denn unsere Food-Spezialisten
              absolvieren regelmäßige Weiterbildungen und sind nach den
              Anforderungen von HACCP, IFS und BRC geschult.
            </p>
            <br/>
            <p className="description-service">
              Mit Gewissenhaftigkeit und höchster Präzision wollen wir dem
              Vertrauen unserer Kunden nicht einfach nur gerecht werden, sondern
              ihre Erwartungen immer wieder übertreffen. Wir sorgen zuverlässig
              und überprüfbar für konstant hohe Sauberkeit und setzen dabei auf
              neueste Reinigungstechnologie und ein durchdachtes
              Qualitätsmanagement – von visuellen und mikrobiologischen
              Kontrollen bis zur lückenlosen Dokumentation sämtlicher
              Arbeitsschritte.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default AnlagenreinigungFood;
