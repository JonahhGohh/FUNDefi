import React from "react";

import { Modal, Button, Image, Col, Row, Container } from "react-bootstrap";

export default function FundWithdrawlModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fund Withdrawal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row style={{ marginBottom: "1em" }}>
            <Col>
              <strong>Total donations per currency</strong>
            </Col>
            <Col>
              <strong>Total Conversion Fee</strong>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <Image
                  rounded
                  style={{ height: "30px", width: "30px" }}
                  src={require("../images/usd.png")}
                />
                &nbsp;USD <strong>102.12</strong>
              </p>
              <p>
                <Image
                  rounded
                  style={{ height: "30px", width: "30px" }}
                  src={require("../images/btc.png")}
                />
                &nbsp;BTC&nbsp; <strong>0.02</strong>
              </p>
              <p>
                <Image
                  rounded
                  style={{ height: "30px", width: "30px" }}
                  src={require("../images/eth.png")}
                />
                &nbsp;ETH&nbsp; <strong>2.5</strong>
              </p>
              <p>
                <Image
                  rounded
                  style={{ height: "30px", width: "30px" }}
                  src={require("../images/sol.png")}
                />
                &nbsp;SOL&nbsp; <strong>33.2</strong>
              </p>
            </Col>
            <Col>
              <p>
                <Image
                  rounded
                  style={{ height: "30px", width: "30px" }}
                  src={require("../images/usd.png")}
                />
                &nbsp;USD <strong>0.00</strong>
              </p>
              <p>
                <Image
                  rounded
                  style={{ height: "30px", width: "30px" }}
                  src={require("../images/btc.png")}
                />
                &nbsp;BTC&nbsp; <strong>0.0002</strong>
              </p>
              <p>
                <Image
                  rounded
                  style={{ height: "30px", width: "30px" }}
                  src={require("../images/eth.png")}
                />
                &nbsp;ETH&nbsp; <strong>0.025</strong>
              </p>
              <p>
                <Image
                  rounded
                  style={{ height: "30px", width: "30px" }}
                  src={require("../images/sol.png")}
                />
                &nbsp;SOL&nbsp; <strong>0.332</strong>
              </p>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: "2em" }}>
          <p>
            Total Donation Amount: <strong>9,243.09 USD</strong>
          </p>
          <p>
            Total Withdrawal Fee: <strong>89.95 USD</strong>
          </p>
          <p>
            Total Withdrawal Amount: <strong>9,153.14 USD</strong>
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Withdraw</Button>
      </Modal.Footer>
    </Modal>
  );
}
