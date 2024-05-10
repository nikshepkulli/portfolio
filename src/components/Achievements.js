import React, {useState} from "react";
import {Button} from "react-bootstrap";
import "./Achievements.css";
import PDFViewerComponent from "./PDFViewerComponent";

const Achievements = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const pdfUrl1 = "src/rewards&recognition.pdf";
  const pdfUrl2 = "src/rewards&recognition2.pdf";

  const modalContent = <PDFViewerComponent pdfUrl={pdfUrl2} />;

  return (
    <section id="achievements">
      <div className="achi"></div>
      <div className="heading">
        <Button variant="primary" onClick={handleShow}>
          Open PDF Viewer
        </Button>
        <h2>Achievements</h2>
        {showModal && modalContent}
      </div>
    </section>
  );
};

export default Achievements;
