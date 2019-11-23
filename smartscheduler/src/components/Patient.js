//Notes: 
//Patient Dashboard needs patient name and details at top. States have fields but other code needs to be written to display them.
//nav bar on left
//add box with "No Appointments Scheduled" & Button below that stating "Schedule Appointment"
import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import NewAppt from "./NewAppt.js";
import ShowAppt from "./ShowAppt.js";
import UpdateAppt from "./UpdateAppt.js";


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
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      comments: "",
      visitType: "",
      time: "",
      appointments: [],
      appointment: {},
      selectedAppointment: {},
      editButton: false

    };
    this.getAppointments = this.getAppointments.bind(this);
    this.deleteAppointments = this.deleteAppointments.bind(this);
    this.toggleVisited = this.toggleVisited.bind(this);
    this.editAppointments = this.editAppointments.bind(this);
  }

  componentDidMount() {
    this.getAppointments();
  }

  async getAppointments() {
    const response = await axios(`${baseURL}/appointment`);
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
    await axios.delete(`${baseURL}/appointment/${id}`);
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
    const showUpdateAppt= this.state.editButton ? <UpdateAppt appointment={ this.state.selectedAppointment } getAppointments={ this.state.getAppointments } /> : null;
    
    return (
      <div className="container">
        <h1>Welcome Molly Weasley</h1>

        <h1>My Appointments</h1>
        <NewAppt getAppointments={this.getAppointments} baseURL={baseURL} />
        <main>
          <div >
          <section>
            <table className="appointments">
              <tbody>
                {this.state.appointments.map(appointment => {
                  const date = new Date(appointment.date);
                  const formatDate = date.toDateString()
                  return (
                    <tr
                      onMouseOver={() => this.getAppointment(appointment)}
                      key={appointment._id}
                    >
                      <td>
                        <a href={ appointment } target="_blank">
                          { formatDate }
                        </a>
                      </td>
                      <td>
                        { appointment.time }
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
                        <button onClick={() => this.deleteAppointments(appointment._id)}>
                          Delete{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
          </div>
          <section> { showUpdateAppt } </section>
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
