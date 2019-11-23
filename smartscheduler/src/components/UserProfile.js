//Note: Needs to be included in left nav on patient dashboard.
import React, { Component } from "react";
import axios from "axios";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      category: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    console.log("edited");
    this.setState({
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      dob: this.props.user.dob,
      email: this.props.user.email,
      phone: this.props.user.phone,
    });
  }

  handleOnChange(event) {
    const { key, value } = event.target;
    this.setState({
      [key]: value
    });
  }

  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      const userID = this.props.user._id;
      const url = `http://localhost:3003/bookmarks/${userID}`;
      const payload = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dob: this.state.dob,
        email: this.state.email,
        phone: this.state.phone,
        };
      const updatedUser = await axios.put(url, payload);
      this.props.getPatient();
      this.setState({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        phone: "",
        
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <p>
        <form onSubmit={this.handleEditSubmit}>
        <div className="row">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={ this.state.firstName } onChange={ this.handleOnChange }/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={ this.state.lastName } onChange={ this.handleOnChange }/>
          <label htmlFor="dob">Date of Birth</label>
          <input type="text" id="dob" name="dob" value={ this.state.dob } onChange={ this.handleOnChange } />
          <input type="text" id="email" name="email" value={ this.state.email } onChange={ this.handleOnChange } />
          <input type="text" id="phone" name="phone" value={ this.state.phone } onChange={ this.handleOnChange } />
          <input type="submit" value="Update User Profile" />
        </div>
      </form>
      </p>

    );
  }
}

export default UserProfile;
