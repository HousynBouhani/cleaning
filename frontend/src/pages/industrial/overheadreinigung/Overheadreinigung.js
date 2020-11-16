import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Awards from "../../../components/Awards&memberships/Awards";
import banner from "../../../assets/images/Overhead-banner.png";

const Overheadreinigung = () => {
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
            <h2 className="final-cleaning">Overheadreinigung</h2>
          </Col>
        </Row>

        <Row>
          <Container>
            <h3 className="mb-3">Sauberkeit auf höchstem Niveau</h3>
            <p className="description-service">
              Höchstes Niveau, höchste Konzentration und höchste Ansprüche –
              Reinigungsaufträge über Kopfhöhe passen perfekt zu unserem
              Arbeitsstil. Unsere Mitarbeiter reinigen Akustik-, Metall- und
              Putzdecken mit höchster Präzision und lassen dabei auch
              hartnäckigen Verschmutzungen keine Chance. Wir reinigen
              Beleuchtungsanlagen, Kabelauflagen und Rohre und bekämpfen
              Mikroorganismen, wie Schimmelsporen, Bakterien und Keime. Damit
              sorgen wir für ein deutlich angenehmeres Raumklima und fördern die
              Gesundheit aller Raumnutzer.
            </p>
            <br />
            <p className="description-service">
              Bei uns bekommen Sie keine Standardreinigung von der Stange,
              sondern echte norddeutsche Wertarbeit, die sich ganz nach Ihren
              Bedürfnissen richtet. Je nach Fläche reinigen wir maschinell oder
              manuell im Nass- oder Trockenverfahren und setzen je nach
              Staubklasse spezielle Industriesicherheitssauger mit
              entsprechender Filterklasse ein.
            </p>
            <br />
            <p className="description-service">
              Selbstverständlich sorgen wir dabei dafür, dass alle technischen
              Deckeneigenschaften in vollem Umfang erhalten bleiben – wie
              Brandschutz oder Schalldämmung. Auch auf den optimalen Schutz
              sensibler Bereiche, Geräte und Maschinen können Sie sich bei uns
              bedenkenlos verlassen. Damit alle Beteiligten auch in großen Höhen
              so sicher wie möglich arbeiten können, erfüllen wir natürlich die
              Unfallverhütungsvorschriften (UVV).
            </p>
          </Container>
        </Row>
      </Container>
      <Awards />
    </Fragment>
  );
};

export default Overheadreinigung;
