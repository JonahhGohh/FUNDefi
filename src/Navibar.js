import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./components/contexts/AuthContext";

export default function Navibar() {
  const { currentUser, signout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
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
            <Image
              style={{ paddingRight: "2em" }}
              src={require("./images/FUNDefi_logo_navbar.png")}
            />
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
                to={"/mint"}
                style={{ color: "white", paddingRight: "60px" }}
              >
                Mint NFT
              </Nav.Link>
            )}
            {currentUser && !walletConnected && (
              <Nav.Link
                style={{ color: "white", paddingRight: "60px" }}
                onClick={() => setWalletConnected(true)}
              >
                Connect Wallet
              </Nav.Link>
            )}
            {currentUser && walletConnected && (
              <Nav.Link
                style={{ color: "white", paddingRight: "60px" }}
                onClick={() => setWalletConnected(false)}
              >
                Disconnect Wallet
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
