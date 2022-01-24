import React from "react";
import { Modal, Button, Container, Row, ProgressBar } from "react-bootstrap";

export default function OutreachModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Outreach numbers
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Impressions:</strong> 12221
        </p>
        <p>
          <strong>Clicks:</strong> 851
        </p>
        <p>
          <strong>Average view time:</strong> 1.2 minutes
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
