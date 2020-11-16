import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Strahl-banner.png";

const Strahlverfahren = () => {
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
            <h2 className="final-cleaning">Strahlverfahren</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Für harte Brocken</h3>
            <p className="description-service">
              Mit großer Begeisterung sagen wir besonders anspruchsvollen
              Verunreinigungen mit speziellen Reinigungsverfahren den Kampf an –
              von Trockeneis- bis zur Sand- oder Hochdruckstrahltechnik.
            </p>
            <br />
            <p className="description-service">
              Egal, ob härteste Verkrustungen, Schweröl, oder Fette,
              Feinstaubablagerungen auf besonderen Materialien oder an
              ungewöhnlichen Orten, wie auf Kabelbahnen oder Hochdächern: Unsere
              regelmäßig geschulten Teams sind nicht nur in Bezug auf
              Materialeigenschaften und Reinigungstechnologien immer auf dem
              neuesten Stand, sondern wenden auch modernste Reinigungstechniken
              präzise und zielsicher an. Die konsequente Beachtung der
              jeweiligen Sicherheitsanforderungen und sämtlicher Belange des
              Umweltschutzes ist selbstverständlich.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Strahlverfahren;
