import React, {useState} from "react";
import {Button} from "react-bootstrap";
import "./Achievements.css";
const pdfPath = require("../rewards&recognition.pdf");
const Achievements = () => {
  const [showPdf1, setShowPdf1] = useState(false);

  const openPdf1 = () => {
    setShowPdf1(true);
  };

  const closePdf1 = () => {
    setShowPdf1(false);
  };

  return (
    <section id="achievements">
      <div className="heading">
        <Button variant="link" onClick={openPdf1}>
          <i className="fa fa-trophy" aria-hidden="true"></i>
        </Button>
        <h2>Achievements</h2>
      </div>
      {showPdf1 && (
        <div className="pdf-container">
          <embed
            src={pdfPath}
            type="application/pdf"
            width="100%"
            height="600px"
          />
          <Button variant="link" onClick={closePdf1}>
            Close
          </Button>
        </div>
      )}
    </section>
  );
};

export default Achievements;
