import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { baseUrl, login } from "../../store/authSlice";
import InputField from "./InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [failToLogin, setFailToLogin] = useState();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    await baseUrl
      .post("/auth/login", values)
      .then((res) => {
        dispatch(login({ email: values.email, id: res.data.token }));
        history.replace("/dashboard");
      })
      .catch(() =>
        setFailToLogin("You entered wrong credentials, please try again")
      );
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form
        className="container vh-100 d-flex flex-column align-items-center"
        style={{ marginTop: "20vh" }}
      >
        <InputField label="Email" name="email" />
        <InputField label="Password" type="password" name="password" />
        {failToLogin && <div style={{ color: "red" }}>{failToLogin}</div>}
        <Link className="d-block mb-2 w-50" to="/signup">
          Sing Up
        </Link>
        <Button variant="primary" type="submit" className="w-50">
          Sign in
        </Button>
      </Form>
    </Formik>
  );
};

export default SignIn;
