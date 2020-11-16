import React from "react";
import { Container, Row } from "react-bootstrap";

const ÜberUns = () => {
  return (
    <Container>
      <Row>
        <div className="info-title d-flex justify-content-center mt-5 w-100">
          <h2>Über Uns</h2>
        </div>

        <div className="info-text mt-5">
          <strong>Langjährige Erfahrung </strong>

          <p>
            Seit mittlerweile über 10 Jahren arbeiten wir für unsere Kunden auf
            dem höchsten Niveau in Sachen Sauberkeit &amp; Hygiene
          </p>
          <br/>
          <strong>Absolute Spezialisten</strong>

          <p>
            Unser Team besteht ausschließlich aus geschulten Fachkräften. Nur so
            können wir für unsere Kunden das bestmögliche Reinigungsergebnis mit
            Zufriedenheitsgarantie erzielen.
          </p>
          <br/>
          <strong>Top ausgestattet</strong>
          <p>
            Mit Hilfe unseres Reinigungs-Equipments können wir jeden
            Kundenwunsch bedienen und hinterlassen nur glänzende Ergebnisse.
          </p>
          <br/>
          <strong>Immer zuverlässig </strong>
          <p>
            Bei uns wird Service und Zuverlässigkeit großgeschrieben. Auf uns
            können Sie zählen 24h 7 Tage die Woche. Wir sind immer für Sie da
            auch an Feiertagen.
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default ÜberUns;
