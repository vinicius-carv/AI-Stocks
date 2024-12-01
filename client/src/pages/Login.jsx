import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import usePageTitle from "../hooks/usePageTitle.js";

const Login = () => {
  usePageTitle("Login");
  return (
    <div className="Login">
      <div className="container d-flex justify-content-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form className="login-form form-control d-flex flex-column" onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="form-text form-input"
              />
              <ErrorMessage name="email" component="span" className="text-danger" />
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                id="password"
                className="form-text form-input"
              />
              <ErrorMessage name="password" component="span" className="text-danger" />
              <a className="btn btn-outline-primary mt-4" >
                Register
              </a>

              <button className="btn btn-primary mt-4" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
