import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label style={{ textAlign: "left" }}>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              className="w-100"
              type="submit"
              style={{ marginTop: "1em" }}
            >
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Do not have an account yet? Sign up!
      </div>
    </>
  );
}
