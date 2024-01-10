import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";
function LoginPage({ setUser }) {
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address !")
        .required("Email !!"),
    }),
    onSubmit: async (values) => {
      let data = await axios.post("http://localhost:3000/user/login", values);

      setUser(data.data);

      navigation("/");
    },
  });

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
