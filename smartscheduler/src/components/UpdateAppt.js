//Note: Needs to be linked as modal.
import React, { Component } from "react";
import axios from "axios";

class UpdateAppt extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      time: "",
      vistType: "",
      comments: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    console.log("edited");
    this.setState({
      date: this.props.appointment.date,
      time: this.props.appointment.time,
      visitType: this.props.appointment.visitType,
      comments: this.props.appointment.comments,
    });
  }

  handleOnChange(event) {
    const { id, value } = event.target;
    console.log({ id, value })
    this.setState({
      [id]: value
    });
  }

  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      const appointmentID = this.props.appointment._id;
      const url = `http://localhost:3003/${appointmentID}`;
      const payload = {
        date: this.state.appointment.date,
        time: this.state.appointment.time,
        visitType: this.state.appointment.visitType,
        comments: this.state.appointment.comments,
        };
      const updatedAppointment = await axios.put(url, payload);
      this.props.getAppointments();
      this.setState({
        date: "",
        time: "",
        visitType: "",
        comments: "",
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const date = new Date(this.props.appointment.date);
    const formatDate = date.toDateString();
    return (
      <div className="card-content">
        <h3>Edit Appointment</h3>
        <form onSubmit={this.handleEditSubmit}>
          <label htmlFor="date">Date</label>
            <input 
            className="inputData" 
            type="text" 
            id="date" 
            name="date" 
            value={ this.state.date } 
            onChange={ this.handleOnChange } 
            />
            <label htmlFor="time">Time</label>
            <input 
            className="inputData" 
            type="text" 
            id="time" 
            name="time" 
            value={ this.state.time } 
            onChange={ this.handleOnChange } 
            />
            <label htmlFor="visitType">Appointment Type</label>
            <input 
            className="inputData" 
            type="text" 
            id="visitType" 
            name="visitType" 
            value={ this.state.visitType } 
            onChange={ this.handleOnChange } 
            />
            <label htmlFor="comments">Comments / Additional Information</label>
            <textarea 
            // className="inputData" 
            // className="u-full-width" 
            id="comments" 
            name="comments" 
            value={ this.state.comments } 
            onChange={ this.handleOnChange } 
            />
            <input 
            className="submitBtn" 
            type="submit" 
            value="Update Appointment" 
            />          
        </form>
      </div>
    );
  }
}

export default UpdateAppt;
