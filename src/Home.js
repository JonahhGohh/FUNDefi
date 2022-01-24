import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Alert,
  Card,
  CardGroup,
  ButtonGroup,
  ProgressBar,
  Container,
  Col,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  let history = useHistory();

  const goToIndivProj = () => {
    history.push({
      pathname: "/indivProj",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginTop: "65px", color: "white" }}>
          Welcome to FUNDefi
        </h1>
        <h2
          style={{
            marginTop: "30px",
            marginBottom: "40px",
            width: "900px",
            color: "cyan",
          }}
        >
          Fundefi is a fundraising platform where you can list NFT projects for
          crowdfunding and donate to other projects!
        </h2>

        <ButtonGroup aria-label="Get started">
          <Button
            className="mx-3 py-3 mb-3 px-3"
            variant="warning"
            size="lg"
            style={{ width: "300px" }}
            a
            href="./Discover"
          >
            DISCOVER FUNDRAISERS
          </Button>
          <Button
            className="mx-3 py-3 mb-3 px-3"
            variant="primary"
            size="lg"
            style={{ width: "300px" }}
            a
            href="./createFundraiser"
          >
            CREATE FUNDRAISERS
          </Button>
        </ButtonGroup>

        <h2
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            width: "900px",
            color: "cyan",
          }}
        >
          You can make a difference now!
        </h2>

        {/*Card#1 - Save the rainforest*/}
        <CardGroup>
          <Card
            className="rounded-3 my-3 mx-3 py-3 px-3"
            style={{ color: "#000" }}
          >
            <ProgressBar
              className="progress1 bg-success"
              role="progressbar"
              aria-valuenow="39"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>39% complete</span>
            </ProgressBar>
            <Card.Header>SAVE ATLANTIC RAINFOREST</Card.Header>
            <Container>
              <Col>
                <Card.Img
                  className="photo"
                  style={{
                    height: "12em",
                    width: "20em",
                    objectFit: "fill",
                  }}
                  src={require("./images/forest.jpg")}
                />
              </Col>
            </Container>
            <Card.Body>
              <Card.Title>
                <h3>5,850 / 15,000 USD</h3>
              </Card.Title>
              <Card.Text className="border d-flex align-items-center justify-content-center">
                This project seeks to raise awareness and protect the Atlantic
                forest in Paraguay, Argentina and Brazil.
              </Card.Text>
              <Button
                className="mx-1 py-3 px-3"
                variant="dark"
                size="lg"
                onClick={goToIndivProj}
              >
                Find out more
              </Button>
              <Button className="mx-1 py-3 px-3" variant="primary" size="lg">
                Donate now
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Started 12 days ago
            </Card.Footer>
          </Card>

          {/*Card#2 - Build schools*/}
          <Card
            className="rounded-3 my-3 mx-3 py-3 px-3"
            style={{ color: "#000" }}
          >
            <ProgressBar
              className="progress2 bg-success"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>75% complete</span>
            </ProgressBar>
            <Card.Header>BUILD A SCHOOL IN ETHIOPIA</Card.Header>
            <Container>
              <Col>
                <Card.Img
                  className="photo"
                  style={{
                    height: "12em",
                    width: "20em",
                    objectFit: "fill",
                  }}
                  src={require("./images/school.jpg")}
                />
              </Col>
            </Container>
            <Card.Body>
              <Card.Title>
                <h3>150,000 / 200,000 USD</h3>
              </Card.Title>
              <Card.Text className="border d-flex align-items-center justify-content-center">
                This project aims to raise USD$200,000 to build schools in rural
                Ethiopia so that education is accesible for more children.
              </Card.Text>
              <Button
                className="mx-1 py-3 px-3"
                variant="dark"
                size="lg"
                onClick={goToIndivProj}
              >
                Find out more
              </Button>
              <Button className="mx-1 py-3 px-3" variant="primary" size="lg">
                Donate now
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">Started 3 days ago</Card.Footer>
          </Card>

          {/*Card#3 - Clean river*/}
          <Card
            className="rounded-3 my-3 mx-3 py-3 px-3"
            style={{ color: "#000" }}
          >
            <ProgressBar
              className="progress3 bg-success"
              role="progressbar"
              aria-valuenow="82"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>82% complete</span>
            </ProgressBar>
            <Card.Header>GANGES RIVER CLEANING</Card.Header>
            <Container>
              <Col>
                <Card.Img
                  className="photo"
                  style={{
                    height: "12em",
                    width: "20em",
                    objectFit: "fill",
                  }}
                  src={require("./images/river.jpg")}
                />
              </Col>
            </Container>
            <Card.Body>
              <Card.Title>
                <h3>287,000 / 350,000 USD</h3>
              </Card.Title>
              <Card.Text className="border d-flex align-items-center justify-content-center">
                This project aims to raise USD$350,000 to clean the Ganges river
                in India to reduce the plastic debris.
              </Card.Text>
              <Button
                className="mx-1 py-3 px-3"
                variant="dark"
                size="lg"
                onClick={goToIndivProj}
              >
                Find out more
              </Button>
              <Button className="mx-1 py-3 px-3" variant="primary" size="lg">
                Donate now
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Started 21 days ago
            </Card.Footer>
          </Card>
        </CardGroup>
      </header>
    </div>
  );
};

export default Home;
