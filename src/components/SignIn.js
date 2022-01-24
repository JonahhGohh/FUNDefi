import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../components/contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch (e) {
      console.log(e);
      setError("Failed to sign into account!");
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
              disabled={loading}
            >
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Do not have an account yet? <Link to="/signUp">Sign up!</Link>
      </div>
    </div>
  );
}
