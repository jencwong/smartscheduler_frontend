import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="menu-list">
        <p className="menu-label">
          Welcome Molly Weasley
        </p>
          <a href="#">Dashboard</a>
          <a href="#">User Profile</a>
        <p className="menu-label">
          Office Information
        </p>
          <a>Directions</a>
          <a>Map</a>
          <a>Contact</a>
          <a>Add a member</a>
      </div>
    
    );
  }
}

export default Menu;
