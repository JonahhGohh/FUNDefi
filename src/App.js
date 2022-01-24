import "./App.css";
import Navibar from "./Navibar";
import { AuthProvider } from "./components/contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import MyFundraisers from "./MyFundraisers";
import Discover from "./Discover";
import CreateFundraiser from "./createFundraiser";
import ConnectWallet from "./ConnectWallet";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import WidthContainer from "./components/WidthContainer";
import PrivateRoute from "./components/PrivateRoute";
import IndivProj from "./IndivProj";
import View from "./View";
import Mint from "./Mint";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navibar />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/discover">
              <Discover />
            </Route>
            <PrivateRoute path="/fundraiser">
              <MyFundraisers />
            </PrivateRoute>
            <PrivateRoute path="/connectWallet">
              <ConnectWallet />
            </PrivateRoute>
            <PrivateRoute path="/createFundraiser">
              <Mint />
            </PrivateRoute>
            <PrivateRoute path="/indivProj">
              <IndivProj />
            </PrivateRoute>
            <Route path="/signIn">
              <WidthContainer>
                <SignIn />
              </WidthContainer>
            </Route>
            <Route path="/signUp">
              <WidthContainer>
                <SignUp />
              </WidthContainer>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
