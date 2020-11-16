import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/einrichtungen-banner.png";

const RehaEinrichtungen = () => {
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
            <h2 className="final-cleaning">Reha-Einrichtungen</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Infektionsfreie Genesung</h3>
            <p className="description-service">
              Wir helfen dabei, die vollständige Genesung Ihrer Patienten auf
              einen sauberen Weg zu bringen – mit professioneller Hygiene und
              einem gepflegten Umfeld, dass den Heilungsprozess nachhaltig
              unterstützt. Als erfahrener Reinigungsdienstleister im Medizin-
              und Gesundheitsbereich kennen wir die besonderen Ansprüche an die
              Umgebungshygiene bei Patienten mit hohem Infektionsrisiko.
            </p><br />
            <p className="description-service">
              Unsere hochqualifizierten Reinigungskräfte beherrschen die
              Reinigungs- und Desinfektionspraxis und haben auch ein geschultes
              Auge für mögliche Infektionsquellen, Keimverbreitungswege und
              Infektionsträger. Mit viel Begeisterung und großer Sorgfalt
              erledigen wir sämtliche Reinigungsarbeiten in Patientenzimmern,
              Funktions- und Behandlungsräumen, Saunen, Schwimmbädern,
              öffentlichen Bereichen – unter anderem.
            </p>
            <br />
            <p className="description-service">
              Dabei beachten wir die aktuellen gesetzlichen Vorgaben, wie das
              Infektionsschutzgesetz oder die RKI-Richtlinien, und orientieren
              uns gleichzeitig auch an Ihren innerbetrieblichen Abläufen,
              Verfahrensanweisungen und bereichsspezifischen Besonderheiten.
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default RehaEinrichtungen;
