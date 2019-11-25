import React, { Component } from "react";

class Session extends Component {
  constructor() {
    super();
    this.state = {
      message: "Loading..."
    };
  }

  componentDidMount() {
    fetch("/api/session")
      .then(res => res.text())
      .then(res => this.setState({ message: res }));
  }

  render() {
    return (
      <div>
        <h1>Session</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Session;
