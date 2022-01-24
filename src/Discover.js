import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardGroup,
  ButtonGroup,
  ProgressBar,
  Container,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Discover = () => {
  return (
    <div>
      <header className="App-header">
        <h1 style={{ marginTop: "60px", color: "white" }}>
          Discover Fundraisers
        </h1>
        <h3
          style={{
            marginTop: "10px",
            marginBottom: "35px",
            width: "900px",
            color: "cyan",
          }}
        >
          You can make a difference now!
        </h3>

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
              <Card.Title>300 USD</Card.Title>
              <Card.Text className="border d-flex align-items-center justify-content-center">
                This project seeks to raise awareness and protect the Atlantic
                forest in Paraguay, Argentina and Brazil.
              </Card.Text>
              <Button className="mx-1 py-3 px-3" variant="dark" size="lg">
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
                  style={{
                    height: "12em",
                    width: "20em",
                    objectFit: "fill",
                  }}
                  className="photo"
                  src={require("./images/school.jpg")}
                />
              </Col>
            </Container>
            <Card.Body>
              <Card.Title>88 USD</Card.Title>
              <Card.Text className="border d-flex align-items-center justify-content-center">
                This project aims to raise USD$200,000 to build schools in rural
                Ethiopia so that education is accesible for more children.
              </Card.Text>
              <Button className="mx-1 py-3 px-3" variant="dark" size="lg">
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
                  style={{
                    height: "12em",
                    width: "20em",
                    objectFit: "fill",
                  }}
                  className="photo"
                  src={require("./images/river.jpg")}
                />
              </Col>
            </Container>
            <Card.Body>
              <Card.Title>120 USD</Card.Title>
              <Card.Text className="border d-flex align-items-center justify-content-center">
                This project aims to raise USD$350,000 to clean the Ganges river
                in India to reduce the plastic debris.
              </Card.Text>
              <Button className="mx-1 py-3 px-3" variant="dark" size="lg">
                Find out more
              </Button>
              <Button className="mx-1 py-3 px-3" variant="primary" size="lg">
                Donate now
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Started 28 days ago
            </Card.Footer>
          </Card>
        </CardGroup>

        {/*Card#4 - Preserve arts*/}
        <CardGroup>
          <Card
            className="rounded-3 my-5 mx-3 py-3 px-3"
            style={{ color: "#000" }}
          >
            <ProgressBar
              className="progress4 bg-success"
              role="progressbar"
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>45% complete</span>
            </ProgressBar>
            <Card.Header>PRESERVE OUR ARTS</Card.Header>
            <Container>
              <Col>
                <Card.Img
                  style={{
                    height: "12em",
                    width: "20em",
                    objectFit: "fill",
                  }}
                  className="photo"
                  src={require("./images/art.jpg")}
                />
              </Col>
            </Container>

            <Card.Body>
              <Card.Title>180 USD</Card.Title>
              <Card.Text className="border d-flex align-items-center justify-content-center">
                This project aims to raise awareness and preserve new artists by
                providing exhibition spaces to showcase their work.
              </Card.Text>
              <Button className="mx-1 py-3 px-3" variant="dark" size="lg">
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

          {/*Card#5 - lend support to low-income families*/}
          <Card
            className="rounded-3 my-5 mx-3 py-3 px-3"
            style={{ color: "#000" }}
          >
            <ProgressBar
              className="progress5 bg-success"
              role="progressbar"
              aria-valuenow="93"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>93% complete</span>
            </ProgressBar>
            <Card.Header>LOW-INCOME FAMILIES</Card.Header>
            <Container>
              <Col>
                <Card.Img
                  style={{
                    height: "12em",
                    width: "20em",
                    objectFit: "fill",
                  }}
                  className="photo"
                  src={require("./images/food.jpg")}
                />
              </Col>
            </Container>
            <Card.Body>
              <Card.Title>90 USD</Card.Title>
              <Card.Text className="border d-flex align-items-center justify-content-center">
                This goal of this project is to raise 50K USD to provide food
                and groceries to low-income families in Singapore.
              </Card.Text>
              <Button className="mx-1 py-3 px-3" variant="dark" size="lg">
                Find out more
              </Button>
              <Button className="mx-1 py-3 px-3" variant="primary" size="lg">
                Donate now
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Started 41 days ago
            </Card.Footer>
          </Card>

          {/*Card#6 - support cancer patients*/}
          <Card
            className="rounded-3 my-5 mx-3 py-3 px-3"
            style={{ color: "#000" }}
          >
            <ProgressBar
              className="progress6 bg-success"
              role="progressbar"
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>55% complete</span>
            </ProgressBar>
            <Card.Header>SUPPORT CANCER PATIENTS</Card.Header>
            <Container>
              <Col>
                <Card.Img
                  style={{
                    height: "12em",
                    width: "20em",
                    objectFit: "fill",
                  }}
                  className="photo"
                  src={require("./images/cancer.jpg")}
                />
              </Col>
            </Container>
            <Card.Body>
              <Card.Title>210 USD</Card.Title>
              <Card.Text className="border d-flex align-items-center justify-content-center">
                This project aims to raise USD$500,000 to fund medical
                treatments and chemotherapy for cancer patients in the US.
              </Card.Text>
              <Button className="mx-1 py-3 px-3" variant="dark" size="lg">
                Find out more
              </Button>
              <Button className="mx-1 py-3 px-3" variant="primary" size="lg">
                Donate now
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Started 34 days ago
            </Card.Footer>
          </Card>
        </CardGroup>
      </header>
    </div>
  );
};

export default Discover;
