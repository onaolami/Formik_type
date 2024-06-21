import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import { ILoginRequest, ILoginResponse } from "../../types/auth.types";
import authService from "../../services/auth.service";
import { AxiosResponse } from "axios";

const LoginPage = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(2, "Password should be more than 2")
      .required("Password is required"),
  });

  const initialValues: ILoginRequest = {
    username: "",
    password: "",
  };

  const onSubmit = (
    values: ILoginRequest,
    helpers: FormikHelpers<ILoginRequest>
  ) => {
    console.log("I am within the onSubmit function", values);
    authService
      .login(values)
      .then((response: AxiosResponse<ILoginResponse>) => {
        console.log("response", response);
        alert(`Welcome ${response.data.firstName}`);
      })
      .catch((err: any) => {
        console.log("err", err);
      })
      .finally(() => {
        helpers.setSubmitting(false);
        helpers.resetForm();
      });
  };

  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <h1>Login</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field name="username">
              {({ meta, field }: FieldProps) => (
                <div>
                  <label htmlFor="username">Username</label>
                  <input id="username" autoComplete="off" {...field} />
                  {meta.touched && meta.error && <p>{meta.error}</p>}
                </div>
              )}
            </Field>

            <Field name="password">
              {({ meta, field }: FieldProps) => (
                <div>
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" {...field} />
                  {meta.touched && meta.error && <p>{meta.error}</p>}
                </div>
              )}
            </Field>

            <div>
              <button type="submit">
                {isSubmitting ? "Loading..." : "Login"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
