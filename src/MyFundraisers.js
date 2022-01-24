import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ProgressModal from "./components/ProgressModal";
import OutreachModal from "./components/OutreachModal";
import FundWithdrawlModal from "./components/FundWithdrawlModal";

export const MyFundraisers = () => {
  const stats = [
    {
      name: "SAVE ATLANTIC RAINFOREST",
      description:
        "This project seeks to raise awareness and protect the Atlantic forest in Paraguay, Argentina and Brazil.",
      image: require("./images/forest.jpg"),
      clicks: 221,
      fundsRaised: "12,000 USD",
      target: "15,000 USD",
      sol: "20.5",
      eth: "2.3",
      btc: "0.05",
      dot: "53",
    },
    {
      name: "BUILD A SCHOOL IN ETHIOPIA",
      description:
        "This project aims to raise USD$200,000 to build schools in rural Ethiopia so that education is accesible for more children.",
      image: require("./images/school.jpg"),
    },
  ];

  const [showProgressModal, setShowProgressModal] = useState(false);
  const [showOutreachModal, setShowOutreachModal] = useState(false);
  const [showFundWithdrawalModal, setShowFundWithdrawalModal] = useState(false);

  useEffect(() => {}, []);

  return (
    <div style={{ backgroundColor: "#282c34", height: "1200px" }}>
      <div style={{ paddingTop: "5em" }}>
        <h1 style={{ color: "white" }}>My Fundraisers</h1>
        <Container>
          {stats.map((info) => (
            <Row style={{ marginTop: "2em" }}>
              <Card>
                <Card.Body>
                  <Container fluid>
                    <Row>
                      <Col>
                        <Card.Img
                          variant="left"
                          src={info.image}
                          style={{
                            height: "15em",
                            width: "25em",
                            objectFit: "fill",
                          }}
                        />
                      </Col>
                      <Col>
                        <Card.Title>{info.name}</Card.Title>
                        <Card.Text>{info.description}</Card.Text>
                        <Button
                          style={{ marginLeft: "0.3em", marginRight: "0.3em" }}
                          variant="secondary"
                        >
                          Edit
                        </Button>
                        <Button
                          style={{ marginLeft: "0.3em", marginRight: "0.3em" }}
                          variant="success"
                          onClick={() => setShowProgressModal(true)}
                        >
                          View Progress
                        </Button>
                        <Button
                          style={{ marginLeft: "0.3em", marginRight: "0.3em" }}
                          variant="warning"
                          onClick={() => setShowOutreachModal(true)}
                        >
                          Outreach numbers
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Row>
          ))}
        </Container>
      </div>
      <ProgressModal
        show={showProgressModal}
        data={stats[0]}
        setShowFundWithdrawalModal={() => setShowFundWithdrawalModal(true)}
        onHide={() => setShowProgressModal(false)}
      />
      <OutreachModal
        show={showOutreachModal}
        data={stats[0]}
        onHide={() => setShowOutreachModal(false)}
      />
      <FundWithdrawlModal
        show={showFundWithdrawalModal}
        onHide={() => setShowFundWithdrawalModal(false)}
      />
    </div>
  );
};

export default MyFundraisers;
