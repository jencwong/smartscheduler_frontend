//==============================
//       DEPENDENCIES
//==============================
import React, { Component } from "react";
// import FormNew from "./FormNew.js";
// import FormUpdate from "./FormUpdate.js";
import axios from "axios";
import ShowAppt from "./ShowAppt.js";
let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "heroku or other backend url here";
}
// const baseURL = "http://localhost:3003";
//==============================
//        COMPONENTS
//==============================
class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      users: [],
      appointment: {},
      selectedAppointment: {}
    };
    this.getAppointments = this.getAppointments.bind(this);
    this.getAppointment = this.getAppointment.bind(this);
    // this.getBookmark = this.getBookmark.bind(this);
    // this.handleAddBookmark = this.handleAddBookmark.bind(this);
    // this.deleteBookmark = this.deleteBookmark.bind(this);
    // this.toggleForm = this.toggleForm.bind(this);
  }
  componentDidMount() {
    this.getAppointments();
    this.getPatients();
  }
  async getAppointments() {
<<<<<<< HEAD
    const response = await axios(`${baseURL}/appointment`);
=======
    const response = await axios(`${baseURL}/appointment/admin`);
>>>>>>> testing
    const appointments = response.data;
    this.setState({
      appointments: appointments
    });
  }
  // async getPatient(id) {
  //   const response = await axios(`${baseURL}/user/${id}`);
  //   const data = response.data.foundPatient;
  //   this.setState({
  //     currentPatient: data
  //   });
  //   console.log(this.state.currentPatient);
  // }
  async getPatients() {
    const response = await axios(`${baseURL}/user`);
    const users = response.data;
    this.setState({
      users: users
    });
  }
  getAppointment(appointment) {
    this.setState({ appointment: appointment });
  }
  // isEmpty(obj) {
  //   return Object.entries(obj).length === 0 && obj.constructor === Object;
  // }
  //   getBookmark(bookmark) {
  //     this.setState({ bookmark: bookmark });
  //     this.toggleForm();
  //   }
  //   handleAddBookmark(bookmark) {
  //     this.setState({
  //       bookmarks: [...this.state.bookmarks, bookmark]
  //     });
  //   }
  //   async deleteBookmark(id) {
  //     await axios.delete(`${baseURL}/bookmarks/${id}`);
  //     const filteredBookmarks = this.state.bookmarks.filter(bookmark => {
  //       return bookmark._id !== id;
  //     });
  //     this.setState({
  //       bookmarks: filteredBookmarks
  //     });
  //   }
  //   toggleForm() {
  //     this.setState(state => ({
  //       newform: !state.newform
  //     }));
  //   }
  render() {
    return (
      <div className="container is-fluid has-background-grey-lighter">
        <h1 className="title is-1">Doctor's Dashboard</h1>
        <h2 className="subtitle is-1">
          <strong>Appointment List:</strong>
        </h2>
        <table className="appointments">
          <tbody>
            {this.state.appointments.map(appointment => {
              const date = new Date(appointment.date);
              const formatDate = date.toDateString();
              return this.state.users.map(user => {
                console.log("user", user._id);
                console.log("appointment", appointment.patientId);
                if (user._id === appointment.patientId) {
                  console.log("it matches");
                  console.log(user.firstName);
                  return (
                    <tr
                      onMouseOver={() => this.getAppointment(appointment)}
                      key={appointment._id}
                    >
                      <ul>
                        <li className="subtitle is-2">
                          {user.firstName}&nbsp;
                          {user.lastName}&nbsp;
                          {/* {appointment._id} */}
                          {formatDate}&nbsp;
                          {appointment.time}
                          {/* {appointment.patientId} */}
                        </li>
                      </ul>
                      {/* <p>{user.firstName}</p> */}
                      {/* <ul>
                    <li className="subtitle is-2">
                      {user.firstName}
                      {appointment._id}
                      {appointment.date}
                      {appointment.patientId}
                    </li>
                    <div className="buttons is-centered are-normal">
                      <button
                        className="button is-primary"
                        onClick={() => this.getAppointment(appointment._id)}
                        key={appointment._id}
                      >
                        Show Appointment
                      </button>
                    </div>
                  </ul> */}
                    
                  );
                }
              });
              // return <div>hi</div>;
              // const date = new Date(appointment.date);
              // const formatDate = date.toDateString();
              // return (
              //   <div key={appointment._id}>
              //     <ul>
              //       <li className="subtitle is-2">
              //         {appointment._id}
              //         {appointment.date}
              //         {appointment.patientId}
              //       </li>
              //       <div className="buttons is-centered are-normal">
              //         <button
              //           className="button is-primary"
              //           onClick={() => this.getAppointment(appointment._id)}
              //           // key={appointment._id}
              //         >
              //           Show Appointment
              //         </button>
              //       </div>
              //     </ul>
              //   </div>
              // );
            })}
            {this.state.appointment && (
              <ShowAppt appointment={this.state.appointment} />
            )}
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default AdminMain;













