import React, { Component } from "react";
// import "./App.css";
import axios from "axios";
import NewAppt from "./NewAppt.js";
import ShowAppt from "./ShowAppt.js";
import UpdateAppt from "./UpdateAppt.js";

//The following commented out code was moved to MainContent:
let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "heroku or other backend url here";
}

class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      appointment: {},
      selectedAppointment: {},
      editButton: false
    };
    this.getAppointments = this.getAppointments.bind(this);
    this.deleteAppointments = this.deleteAppointments.bind(this);
    // this.toggleVisited = this.toggleVisited.bind(this);
    this.editAppointments = this.editAppointments.bind(this);
  }

  componentDidMount() {
    this.getAppointments();
  }

  async getAppointments() {
    const response = await axios(`${baseURL}/appointments`);
    const appointments = response.data;

    this.setState({ appointments: appointments });
  }

  async editAppointments(clickedAppointment) {
    console.log("Clicked Edit Button");
    await this.setState({
      editButton: !this.state.editButton,
      selectedAppointment: clickedAppointment
    });
    console.log("Current Appointment: ", this.state.selectedAppointment);
  }

  async deleteAppointments(id) {
    await axios.delete(`${baseURL}/appointments/${id}`);
    const filteredAppointments = this.state.appointments.filter(appointment => {
      return appointment._id !== id;
    });

    this.setState({
      appointments: filteredAppointments
    });
  }

  getAppointment(appointment) {
    this.setState({ appointment: appointment });
  }

  //note: may not be needed as written - TBD
  async toggleVisited(selectedAppointment, selectedAppointmentId) {
    console.log(selectedAppointment);
    const updatedAppointments = this.state.appointments.map(appointment => {
      if (appointment._id === selectedAppointmentId) {
        const updatedAppointment = {
          ...selectedAppointment,
          visited: !selectedAppointment.visited
        };
        return updatedAppointment;
      } else {
        return appointment;
      }
    });
    this.setState({
      appointments: updatedAppointments
    });
  }

  render() {
    const showUpdateAppt = this.state.editButton ? (
      <UpdateAppt
        appointment={this.state.selectedAppointment}
        getAppointments={this.state.getAppointments}
      />
    ) : null;
    return (
      <div className="container">
        <h1>My Appointments</h1>
        <NewAppt getAppointments={this.getAppointments} baseURL={baseURL} />
        <main>
          <section>
            <table>
              <tbody>
                {this.state.appointments.map(appointment => {
                  return (
                    <tr
                      onMouseOver={() => this.getAppointment(appointment)}
                      key={appointment._id}
                    >
                      <td>
                        <a href={"http://" + appointment.url} target="_blank">
                          {appointment.name}
                        </a>
                      </td>
                      {/* note: toggle may not be needed as written - TBD */}
                      <td
                        className={appointment.visited ? "visited" : null}
                        onDoubleClick={() =>
                          this.toggleVisited(appointment, appointment._id)
                        }
                      >
                        {" "}
                        {appointment.url}
                      </td>
                      <td>
                        <button
                          onClick={() => this.editAppointments(appointment)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          onClick={() =>
                            this.deleteAppointments(appointment._id)
                          }
                        >
                          DELETE{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
          <section> {showUpdateAppt} </section>
        </main>
        <br />
        <br />
        <br />
        {this.state.appointment && (
          <ShowAppt appointment={this.state.appointment} />
        )}
      </div>
    );
  }
}

export default Patient;
