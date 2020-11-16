import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Glas-banner.png";

const Glasreinigung = () => {
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
            <h2 className="final-cleaning">Glasreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Streifenfreier Durchblick</h3>
            <p className="description-service">
              Glänzende Ergebnisse wecken unsere Begeisterung. Deshalb sind wir
              die Spezialisten für die Reinigung und Pflege konventioneller und
              <br />
              außergewöhnlicher Glasarchitekturen im Norden – von Fenstern,
              Glastüren und -trennwänden über Lichtkuppeln, Glasbausteine und -
              <br />
              dächer bis zu Staubdecken, Leuchtschriften und
              Industrieverglasungen. Auf Wunsch natürlich gerne inklusive
              kostengünstiger Rahmen- <br />
              und Falzreinigung. <br /> <br />
              Dabei kommen neben unseren erfahrenen Industriekletterern und
              Hubsteigern auch modernste Geräte und innovative Technologie zum
              <br />
              Einsatz – wie unser Reinstwasser-System. Mit ihm reinigen wir
              Glasfassaden und andere Flächen mit bis zu 18 Metern Arbeitshöhe
              <br />
              schnell und sicher vom Boden aus. Selbstverständlich immer unter
              sorgfältiger Einhaltung der Vorschriften zu Arbeitssicherheit und
              Umweltschutz. <br /> <br />
              So können Sie sich nicht nur in kürzester Zeit über glasklare
              Verhältnisse freuen, sondern auch über besonders lang anhaltende
              <br />
              Sauberkeit. Denn wir verwenden demineralisiertes Wasser, das für
              streifenfreie Trocknung sorgt und die statische Aufladung auf ein
              <br />
              Minimum reduziert – sodass die gereinigten Oberflächen länger
              sauber bleiben. Darüber hinaus ist es besonders schonend und trägt
              <br />
              damit entscheidend zum Werterhalt Ihres Gebäudes bei.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Glasreinigung;
