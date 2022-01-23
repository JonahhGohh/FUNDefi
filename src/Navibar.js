import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./components/contexts/AuthContext";

export default function Navibar() {
  const { currentUser, signout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  console.log(currentUser);

  async function handleSignOut() {
    try {
      await signout();
      history.push("/signIn");
    } catch (e) {
      console.log(e);
      setError("Failed to sign out");
    }
  }

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto fixed-top bg-dark justify-content-center"
            style={{ height: "50px", fontSize: "20px" }}
          >
            <Nav.Link
              as={Link}
              to={"/home"}
              style={{ color: "white", paddingRight: "60px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/discover"}
              style={{ color: "white", paddingRight: "60px" }}
            >
              Discover
            </Nav.Link>
            {currentUser && (
              <Nav.Link
                as={Link}
                to={"/fundraiser"}
                style={{ color: "white", paddingRight: "60px" }}
              >
                My Fundraisers
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link
                as={Link}
                to={"/createFundraiser"}
                style={{ color: "white", paddingRight: "60px" }}
              >
                Create Fundraiser
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link
                as={Link}
                to={"/connectWallet"}
                style={{ color: "white", paddingRight: "60px" }}
              >
                Connect Wallet
              </Nav.Link>
            )}
            {!currentUser && (
              <Nav.Link
                as={Link}
                to={"/signIn"}
                style={{ color: "white", paddingRight: "60px" }}
              >
                Sign In
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link
                onClick={handleSignOut}
                style={{ color: "white", paddingRight: "60px" }}
              >
                Sign out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
