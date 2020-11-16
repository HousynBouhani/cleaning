import React from "react";
// bootstrap Ui
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// custom css
import "./awards.css";

// images
import handcertif from "../../assets/images/handwork-certif.png";
import hanovcertif from "../../assets/images/hanover-certif.png";

const Awards = () => {
  return (
    <div className="awards">
      <Container fluid>
        <h2 className="text-center mb-0">Auszeichnungen & Mitgliedschaften</h2>
        <Row className="awards-section">
          <div className="placeholder">
            <div>
              <img className="certif" src={handcertif} alt="certificate" />
            </div>
            <div>
              <img className="certif" src={hanovcertif} alt="certificate" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Awards;
