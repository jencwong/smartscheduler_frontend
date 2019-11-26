import React from "react";
import "../style.css";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import axios from "axios";
const baseURL = "http://localhost:3006";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={async (values, { setSubmitting }) => {
      const response = await axios.post(`${baseURL}/user/login`, {
        email: this.state.email,
        password: this.state.password
      });
      this.setState({
        email: "",
        password: ""
      });
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <div className="FormCenter">
          <form onSubmit={handleSubmit} className="FormFields">
            <div className="FormField">
              <label htmlFor="email" className="FormField__Label">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  errors.email && touched.email && "error" && "FormField__Input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>
            <div className="FormField">
              <label htmlFor="email" className="FormField__Label">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password &&
                  touched.password &&
                  "error" &&
                  "FormField__Input"
                }
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
            </div>
            <div className="FormField">
              <button
                type="submit"
                className="FormField__Button mr-20"
                onChange
              >
                Login
              </button>
            </div>
          </form>
        </div>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
