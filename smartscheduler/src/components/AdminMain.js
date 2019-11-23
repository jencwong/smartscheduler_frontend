//==============================
//       DEPENDENCIES
//==============================
import React, { Component } from "react";
// import FormNew from "./FormNew.js";
// import FormUpdate from "./FormUpdate.js";
import axios from "axios";

// const baseURL = "http://localhost:3003";

//==============================
//        COMPONENTS
//==============================

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: []
      //   bookmark: {},
      //   newform: true
    };
    this.getAppointments = this.getAppointments.bind(this);
    // this.getBookmark = this.getBookmark.bind(this);
    // this.handleAddBookmark = this.handleAddBookmark.bind(this);
    // this.deleteBookmark = this.deleteBookmark.bind(this);
    // this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.getAppointments();
  }

  async getAppointments() {
    const response = await axios(`${baseURL}/appointment/admin`);
    const appointments = response.data;
    this.setState({
      appointments: appointments
    });
  }

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
          <strong>Appointment List</strong>
        </h2>
        {this.state.appointments.map(appointment => {
          return (
            <div key={appointment._id}>
              <ul>
                <li className="subtitle is-2">{appointment.name}</li>
                {/* <div className="buttons is-centered are-normal">
                  <button
                    className="button is-warning"
                    onClick={() => this.getBookmark(bookmark)}
                  >
                    Edit啦
                  </button>
                  <button
                    className="button is-danger"
                    onClick={() => this.deleteBookmark(bookmark._id)}
                  >
                    删掉bye了
                  </button>
                </div> */}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AdminMain;
