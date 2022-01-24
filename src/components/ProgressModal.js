import React from "react";
import { Modal, Button, Container, Row, ProgressBar } from "react-bootstrap";
import "../styles/Modal.css";

export default function ProgressModal(props) {
  function handleFundWithdrawal() {
    props.setShowFundWithdrawalModal();
    props.onHide();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Progress</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.data.name}</h4>
        <Container>
          <Row>
            <ProgressBar>
              <ProgressBar striped variant={"usd"} now={10} key={1} />
              <ProgressBar striped variant={"btc"} now={20} key={2} />
              <ProgressBar striped variant={"eth"} now={20} key={3} />
              <ProgressBar striped variant={"sol"} now={15} key={4} />
            </ProgressBar>
          </Row>
          <Row>
            <p>
              USD: 102.12 &nbsp;&nbsp;&nbsp;&nbsp; BTC: 0.02
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ETH: 2.5
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              SOL: 33.2
            </p>
            <p>Total Goal: 13,002.23 / 15,000</p>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleFundWithdrawal}>Withdraw Funds</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
