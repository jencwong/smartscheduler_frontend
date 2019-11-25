import React from "react";
import "./App.css";
// import Header from './components/Header';
import Patient from "./components/Patient";
import AdminMain from "./components/AdminMain";
// import Footer from './components/Footer';

// import { Link, Route, Switch } from "react-router-dom";
// import Home from "./Home";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>{/* <Link to="/">Home</Link> */}</li>
          <li>{/* <Link to="/session">Session</Link> */}</li>
        </ul>
        {/* <Switch> */}
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/session" component={Session} /> */}
        {/* </Switch> */}
      </nav>
      {/* <Header /> */}
      <Patient />
      <AdminMain />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
