import React from "react";
import "../App.css";
import Particles from "react-particles-js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
};

function FrontLogin() {
  return (
    <Router>
      <div className="App">
        <div className="App__Aside" refs="stars">
          <nav className="reach">Reach</nav>
          <Particles params={particleOpt} className="particles"></Particles>
        </div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink
              to="/sign-in"
              className="PageSwitcher__Item"
              activeClassName="PageSwitcher__Item--Active"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/sign-up"
              className="PageSwitcher__Item"
              activeClassName="PageSwitcher__Item--Active"
            >
              Sign Up
            </NavLink>
          </div>
          <div className="FormTitle">
            <NavLink
              to="/sign-in"
              className="FormTitle__Link"
              activeClassName="FormTitle__Link--Active"
            >
              Sign In
            </NavLink>
            or
            <NavLink
              exact
              to="/sign-up"
              className="FormTitle__Link"
              activeClassName="FormTitle__Link--Active "
            >
              Sign Up
            </NavLink>
          </div>
          <Route exact path="/sign-up" component={SignUpForm}></Route>
          <Route path="/sign-in" component={SignInForm}></Route>
        </div>
      </div>
    </Router>
  );
}

export default FrontLogin;
