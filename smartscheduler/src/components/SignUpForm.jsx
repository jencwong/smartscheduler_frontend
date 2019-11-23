import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const baseURL = "http://localhost:3003";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      phone: "",
      category: "",
      username: "",
      password: "",
      hasAgreed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({ [name]: value });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(`${baseURL}/user`, {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      dob: this.state.dob,
      email: this.state.email,
      phone: this.state.phone,
      category: this.state.category,
      username: this.state.username,
      password: this.state.password,
      hasAgreed: false
    });
    this.setState({
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      phone: "",
      category: "",
      username: "",
      password: "",
      hasAgreed: false
    });
  }
  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="FormField__Input"
              placeholder="First Name"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="FormField__Input"
              placeholder="Enter your full lastname"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="dob">
              Date of birth
            </label>
            <input
              type="date"
              id="dob"
              className="FormField__Input"
              placeholder="Enter your date of birth"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="phone">
              Enter your phone number
            </label>
            <input
              type="number"
              id="phone"
              className="FormField__Input"
              placeholder="Enter your phone number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              />
              Doctor?
            </label>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="username">
              Username
            </label>
            <input
              type="username"
              id="username"
              className="FormField__Input"
              placeholder="Enter your username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />
              I agree all statements in
              <a
                href=""
                className="Formfield__TermsLink"
                style={{ color: "white", padding: "5px" }}
              >
                terms of service
              </a>
            </label>
          </div>

          <div className="FormField">
            <button
              className="FormField__Button mr-20"
              onChange={this.handleSubmit}
            >
              Sign Up
            </button>
            <Link
              to="/sign-in"
              classname="FormField__Link"
              style={{ color: "white", padding: "5px" }}
            >
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
