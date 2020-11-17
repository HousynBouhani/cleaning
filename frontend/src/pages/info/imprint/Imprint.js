import React from "react";
import { Container, Row } from "react-bootstrap";

const Imprint = () => {
  return (
    <Container>
      <Row>
        <div className="info-title d-flex justify-content-center mt-5 w-100">
          <h2>Impressum</h2>
        </div>
        <div className="info-text mt-5">
          <ul style={{ listStyle: "none",padding:0 }}>
            <li>Rein &amp; Sauber</li>
            <li>Gebäudereinigungsservice</li>
            <li className="mb-3">Venushof.6a 30823 Garbsen</li>
            <li>Vertreten durch:</li>
            <li className="mb-3">Geschäftsführer:</li>
            <li>Yasser Hassan</li>
            <li>+49 157 312 232 22</li>
            <li>+49 513 789 041 01</li>
            <li>E-Mail:info@reinheit-sauberkeit.de</li>
            <li className="mb-3">Registereintrag: </li>
            Eintragung im Handelsregister.
            <li> Registergericht: HannoverII</li>
            <li className="mb-3"> Registernummer: </li>
            <li className="mb-3"> Umsatzsteuer-ID:</li>
            <li>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:{" "}
            </li>
            <li> DE325213941 </li>
            <li className="my-4">Haftungsausschluss: </li>
          </ul>

          <strong className="my-4 d-block">Haftung für Inhalte</strong>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte, fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
          <strong className="my-4 d-block">Haftung für Links</strong>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <strong className="my-4 d-block">Urheberrecht</strong>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default Imprint;
