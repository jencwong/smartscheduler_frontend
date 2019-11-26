import FrontLogin from "./front-login-view";
import React, { Component } from "react";
import Profile from "./profile";
import NavBar from "./navbar";
import SignUpForm from "./signup";
import SignInForm from "./signin";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/auth" component={FrontLogin} />
        </Router>
      </>
    );
  }
}

export default Main;
