import React from "react";
// import './App.css';
// import Header from './components/Header';
import Patient from "./components/Patient";
// import Footer from './components/Footer';
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Secret from "./Secret";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/"</li>
        </ul>
      </nav>
      {/* <Header /> */}
      <Patient />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
