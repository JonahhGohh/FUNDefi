import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Home from './Home';

class Navibar extends Component {
    state = {}
    render() {
        return (
            <Router>
                <div>
                    <Navbar expand="lg">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto fixed-top bg-dark justify-content-center" style={{ height: "50px", fontSize: "20px" }}>
                                <Nav.Link as={Link} to={"/"} style={{ color: "white", paddingRight: "60px" }}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/discover"} style={{ color: "white", paddingRight: "60px" }}>Discover</Nav.Link>
                                <Nav.Link as={Link} to={"/fundraiser"} style={{ color: "white", paddingRight: "60px" }}>My Fundraisers</Nav.Link>
                                <Nav.Link as={Link} to={"/createFundraiser"} style={{ color: "white" }}>Create Fundraiser</Nav.Link>
                                <Nav.Link as={Link} to={"/connectWallet"} style={{ color: "white", paddingRight: "60px" }}>Connect Wallet</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        {/* <Route path="/discover">
                            <Discover />
                        </Route>
                        <Route path="/fundraiser">
                            <Fundraiser />
                        </Route>
                        <Route path="/connectWallet">
                            <ConnectWallet />
                        </Route>
                        <Route path="/createFundraiser">
                            <CreateFundraiser />
                        </Route> */}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Navibar;