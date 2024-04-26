import React, {useState} from "react";
import {Button} from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import "./Achievements.css";
import PDFViewerComponent from "./PDFViewerComponent";

const Achievements = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const pdfUrl1 = "src/certificate.pdf";
  const pdfUrl2 = "src/rewards&recognition2.pdf";

  const modalContent = (
      <PDFViewerComponent pdfUrl={pdfUrl1} />
  );

  return (
    <section id="achievements">
      <div className="heading">
        <Button variant="link" onClick={handleShow}>
          <i className="fa fa-trophy" aria-hidden="true"></i>
        </Button>
        <h2>Achievements</h2>
      </div>

      <ModalComponent
        showModal={showModal}
        handleClose={handleClose}
        modalTitle="Achievements"
        modalContent={modalContent}
      />

      <div className="achi">{/* Achievement items */}</div>
    </section>
  );
};

export default Achievements;
