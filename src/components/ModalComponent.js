import React from "react";
import {Modal, Button} from "react-bootstrap";

class ModalComponent extends React.Component {
  render() {
    const {showModal, handleClose, modalTitle, modalContent} = this.props;

    return (
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent} {/* Render modal content from props */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;
