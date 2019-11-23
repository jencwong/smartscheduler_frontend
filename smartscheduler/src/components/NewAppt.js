import React, { Component } from "react";
import axios from "axios";

//Note: name, dob, email, phone, doctor, and visited are not needed right now and are therefore commented. 
class NewAppt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // dob: "",
      // email: "",
      // phone: "",
      date: "",
      time: "",
      visitType: "",
      // doctor: "",
      // visited: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("test");
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/appointment`, {
      date: this.state.date,
      time: this.state.time,
      visitType: this.state.visitType,
    });
    this.setState({
      date: "",
      time: "",
      visitType: "",
      comments: "",
    });
    this.props.getAppointments();
  }

  render() {
    return (
      <div>
      <h2>Add A New Appointment</h2>
     
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="date"></label>
        <input
          type="text"
          id="date"
          name="date"
          onChange={this.handleChange}
          value={this.state.date}
          placeholder="Date"
        />
        <label htmlFor="time"></label>
        <input
          type="text"
          id="time"
          name="time"
          onChange={this.handleChange}
          value={this.state.time}
          placeholder="Appointment Time"
        />
        <input
          type="text"
          id="visitType"
          name="visitType"
          onChange={this.handleChange}
          value={this.state.visitType}
          placeholder="Reason for Visit"
        />
         <textarea
          id="comments"
          name="comments"
          onChange={this.handleChange}
          value={this.state.comments}
          placeholder="Comments / Reason for Visit"
        />
        <input type="submit" value="SUBMIT" />
      </form>
      </div>
    );
  }
}

export default NewAppt;
