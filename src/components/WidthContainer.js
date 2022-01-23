import React from "react";
import { Container } from "react-bootstrap";

export default function WidthContainer(props) {
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh", marginTop: "5em" }}
    >
      <div className="w-100" style={{ maxWidth: "40vw" }}>
        {props.children}
      </div>
    </Container>
  );
}
